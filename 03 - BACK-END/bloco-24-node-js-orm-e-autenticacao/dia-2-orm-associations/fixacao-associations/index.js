// index.js
const express = require('express');
const { Sequelize } = require('sequelize');
const { Address, Employee, Book, User } = require('./models');
const config = require('./config/config');

const sequelize = new Sequelize(config.development);

const app = express();
app.use(express.json());

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { params: { id }, query: { includeAddresses } } = req;
    // const employee = await Employee.findOne({
    //     where: { id },
    //     include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],
    //   });

    const employee = await Employee.findOne({ where: { id } });
    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });
    
    if (includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    // Outra possível solução para colocar duas opções em um mesmo endpoint
    // const options = includeAddresses === 'true' ? (
    //   { where: { id }, include: [{ model: Address, as: 'addresses' }] }
    // ) : ({ where: { id } });
    // const employee = await Employee.findOne(options);

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/userbooks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Unmanaged transaction example
// app.post('/employees', async (req, res) => {
//   const transaction = await sequelize.transaction();
//   try {
//     const { firstName, lastName, age, city, street, number } = req.body;

//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction },
//     );
//     await Address.create(
//       { city, street, number, employeeId: employee.id },
//       { transaction },
//     );

//     await transaction.commit();
//     return res.status(201).json({ message: 'Cadastrado com sucesso' });
//   } catch (e) {
//     await transaction.rollback();
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   }
// });

// Managed transaction example
app.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const result = await sequelize.transaction(async (transaction) => {
      const employee = await Employee.create(
        { firstName, lastName, age },
        { transaction },
      );
      await Address.create(
        { city, street, number, employeeId: employee.id },
        { transaction },
      );

      return res.status(201).json({ message: 'Cadastrado com sucesso' });
    });
    console.log(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;

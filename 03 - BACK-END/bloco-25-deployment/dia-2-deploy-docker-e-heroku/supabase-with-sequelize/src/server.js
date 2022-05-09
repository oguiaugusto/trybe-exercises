const express = require('express');
const { Product } = require('./database/models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    console.log(name, description);
  
    if (!name || name.length < 2 || !description || description.length < 5) {
      return res.status(400).json({ message: 'invalid request' });
    }
  
    const product = await Product.create({ name, description });
    return res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong' });
  }
});

app.listen(PORT, console.log(`Server online on port ${PORT}`));

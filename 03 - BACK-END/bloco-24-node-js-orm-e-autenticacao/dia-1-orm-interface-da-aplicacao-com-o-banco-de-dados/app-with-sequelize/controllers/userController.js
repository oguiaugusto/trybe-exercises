const express = require('express');
const { User } = require('../models');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ message: 'User not found!' });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.get('/search/:id', async (req, res) => {
  try {
    const { params: { id }, query: { email } } = req;
    const user = await User.findOne({ where: { id, email } });
    
    if (!user) return res.status(404).json({ message: 'User not found!' });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { fullName, email } = req.body;
    const newUser = await User.create({ fullName, email });
    
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { params: { id }, body: { fullName, email } } = req;
    const [updateUser] = await User.update(
      { fullName, email },
      { where: { id } },
    );
    console.log(updateUser);
    
    if (!updateUser) return res.status(404).json({ message: 'User not found!' });
    return res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.destroy({ where: { id } });
    console.log(deleteUser);
    
    return res.status(200).json({ message: 'User deleted successfully!' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Something went wrong!' });
  }
});

module.exports = router;

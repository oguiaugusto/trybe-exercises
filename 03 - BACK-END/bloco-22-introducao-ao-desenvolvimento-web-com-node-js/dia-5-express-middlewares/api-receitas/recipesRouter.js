const express = require('express');
const router = express.Router();
const authMiddleware = require('./auth-middleware');

const normalizeString = (string) => string
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ message: 'Invalid data!' });
  next();
};
const validatePrice = (req, res, next) => {
  const { price } = req.body;
  if (!price || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid data!' });
  }
  next();
};

router.use(authMiddleware);

router.get('/', (_req, res) => res.status(200).json(recipes));
router.get('/search', (req, res) => {
  const { name = '', maxPrice } = req.query;
  const recipe = recipes
    .filter((r) => normalizeString(r.name).includes(normalizeString(name)))
    .filter((r) => maxPrice ? r.price <= parseFloat(maxPrice) : r)

  return (!recipe && recipe.length > 0) ? (
    res.status(404).json({ status: 404, message:'No recipe found' })
  ) : res.status(200).json(recipe);
});
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  return !recipe ? (
    res.status(404).json({ status: 404, message:'Recipe not found' })
  ) : res.status(200).json(recipe);
});

router.post('/', validateName, validatePrice, (req, res) => {
  const { body: { id, name, price }, user: { username } } = req;
  recipes.push({ id, name, price, chef: username });
  res.status(201).json({ message: 'Recipe created successfully!'});
});

router.put('/:id', validateName, validatePrice, (req, res) => {
  const { id } = req.params;
  const { name, price, waitTime } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ status: 404, message:'Recipe not found' });
  }

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price, waitTime };

  res.status(204).end();
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ status: 404, message:'Recipe not found' });
  }

  recipes.splice(recipeIndex, 1);
  res.status(204).end();
});

module.exports = router;

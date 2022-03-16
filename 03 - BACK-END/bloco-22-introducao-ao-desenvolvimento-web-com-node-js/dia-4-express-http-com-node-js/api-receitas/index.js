const express = require('express');
const bodyParser = require('body-parser');

const normalizeString = (string) => string
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const sendRecipeById = (req, res, recipeArr) => {
  const { id } = req.params;
  const recipe = recipeArr.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ status: 404, message: 'Recipe not found' });
  return res.status(200).json(recipe);
};
const searchRecipe = (req, res, recipeArr) => {
  const { name = '', maxPrice, minPrice } = req.query;
  const recipe = recipeArr
    .filter((r) => normalizeString(r.name).includes(normalizeString(name)))
    .filter((r) => maxPrice ? r.price <= parseFloat(maxPrice) : r)
    .filter((r) => minPrice ? r.price >= parseFloat(minPrice) : r);

  if (!recipe || recipe.length === 0) return res.status(404).json({ status: 404, message:'No recipe found' });
  return res.status(200).json(recipe);
};
const sendRecipe = (req, res, recipeArr) => {
  const { name, price, waitTime } = req.body;

  if (waitTime) {
    recipeArr.push({ id: (recipeArr.length + 1), name, price, waitTime });
  } else recipeArr.push({ id: (recipeArr.length + 1), name, price });

  res.status(201).json({ status: 201, message: 'Recipe created successfully!' });
};
const updateRecipe = (req, res, recipeArr) => {
  const {
    params: { id },
    body: { name, price },
  } = req;
  const recipeIndex = recipeArr.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ status: 404, message: 'Recipe not found' });

  recipeArr[recipeIndex] = { ...recipeArr[recipeIndex], name, price };
  res.status(204).end();
};
const deleteRecipe = (req, res, recipeArr) => {
  const { id } = req.params;
  const recipeIndex = recipeArr.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ status: 404, message: 'Recipe not found' });

  recipeArr.splice(recipeIndex, 1);
  res.status(204).end();
};

const foods = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];
const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const app = express();
app.use(bodyParser.json());

app.get('/foods', (_req, res) => res.status(200).json(foods));
app.get('/drinks', (_req, res) => res.status(200).json(drinks));

app.get('/foods/search', (req, res) => searchRecipe(req, res, foods));
app.get('/drinks/search', (req, res) => searchRecipe(req, res, drinks));

app.get('/foods/:id', (req, res) => sendRecipeById(req, res, foods));
app.get('/drinks/:id', (req, res) => sendRecipeById(req, res, drinks));

app.post('/foods', (req, res) => sendRecipe(req, res, foods));
app.post('/drinks', (req, res) => sendRecipe(req, res, drinks));

app.put('/foods/:id', (req, res) => updateRecipe(req, res, foods));
app.put('/drinks/:id', (req, res) => updateRecipe(req, res, drinks));

app.delete('/foods/:id', (req, res) => deleteRecipe(req, res, foods));
app.delete('/drinks/:id', (req, res) => deleteRecipe(req, res, drinks));

app.get('/validate-token', (req, res) => {
  const { authorization: token } = req.headers;

  if (token.length !== 16) return res.status(401).json({ status: 401, message: 'Invalid Token!' });
  return res.status(200).json({ status: 200, message: 'Valid Token!' });
});

app.all('*', (req, res) => res.status(404).json({ status: 404, message: `Path ${req.path} does not exist` }));

app.listen(3001, () => console.log('Running on port 3001'));

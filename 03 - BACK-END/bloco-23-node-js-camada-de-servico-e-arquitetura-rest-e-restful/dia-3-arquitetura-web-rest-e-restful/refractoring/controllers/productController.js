const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  const products = await ProductModel.getAll();

  return res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: 'Product not found' });
  return res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);
  if (newProduct.error) return res.status(400).json({ message: newProduct.error.message });

  return res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.exclude(req.params.id);

  if (!product) return res.status(400).json({ message: "Id not found" });
  if (product.error) return res.status(400).json({ message: newProduct.error.message });

  return res.status(200).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  const product = await ProductModel.update(req.params.id, name, brand);
  if (product.error) return res.status(400).json({ message: product.error.message });

  return res.status(200).json(product);
});

module.exports = router;

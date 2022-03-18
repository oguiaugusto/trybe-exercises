const express = require('express');
const posts = require('../data/postsData');

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === parseInt(id));

  if (!id || !post) return res.status(404).json({ status: 404, message: 'post not found' });
  return res.status(200).json(post);
});

router.get('/', (_req, res) => {
  if (!posts || posts.length === 0) return res.status(200).json({ posts: [] });
  return res.status(200).json(posts);
});

module.exports = router;

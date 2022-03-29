const movieService = require('../services/movieService');

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await movieService.create({ title, directedBy, releaseYear });
  if (movie.error) return res.status(movie.error.code).json({ message: movie.error.message });
  return res.status(201).json({ message: 'Movie created successfully!' });
};

module.exports = {
  create,
};

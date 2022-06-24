// 1. Utilizando o operador $all, retorne todos os filmes que contenham action e adventure no array category.
db.movies.find({
  category: { $all: ['action', 'adventure'] }
});

// 2. 🚀 Agora retorne os filmes que contenham action e sci-fi no array category e possuem nota do IMDB maior do que 7.
db.movies.find({
  $and: [
    { category: { $all: ['action', 'sci-fi'] } },
    { imdbRating: { $gt: 7 } }
  ]
});

// 3. Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings.
db.movies.find(
  { ratings: { $elemMatch: { $gt: 103 } } },
  { _id: 0, title: 1, ratings: 1 }
);

// 4. 🚀 Retorne todos os filmes com ratings entre 100 e 105, exibindo apenas os campos title e ratings.
db.movies.find(
  { ratings: { $elemMatch: { $gte: 100, $lte: 105 } } },
  { _id: 0, title: 1, ratings: 1 }
);

// 5. 🚀 Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9, exibindo apenas os campos title e ratings.
db.movies.find(
  {
    $and: [
      { ratings: { $elemMatch: { $gte: 64, $lte: 105 } } },
      { ratings: { $mod: [9, 0] } }
    ]
  },
  { _id: 0, title: 1, ratings: 1 }
);

// 6. Retorne os filmes da categoria adventure e com ratings maior do que 103, exibindo apenas os campos title, ratings e category.
db.movies.find(
  {
    category: { $all: ['adventure'] },
    ratings: { $elemMatch: { $gt: 103 } }
  },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

// 7. Retorne somente o título de todos os filmes com dois elementos no array category.
db.movies.find(
  { category: { $size: 2 } },
  { _id: 0, title: 1 }
);

// 8. 🚀 Retorne somente o título de todos os filmes com quatro elementos no array ratings.
db.movies.find(
  { ratings: { $size: 4 } },
  { _id: 0, title: 1 }
);

// 9. Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2.
db.movies.find({
  category: { $size: 2 },
  budget: { $mod: [5, 0] }
});

// 10. 🚀 Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title, ratings e category.
db.movies.find(
  {
    $or: [
      { category: { $all: ['sci-fi'] } },
      { ratings: { $elemMatch: { $gt: 199 } } }
    ]
  },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

// 11. Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.
db.movies.find({
  $and: [
    { ratings: { $size: 4 } },
    { category: { $in: ['family', 'adventure'] } },
    { imdbRating: { $not: { $lt: 7 } } }
  ]
});

// 12. 🚀 Utilizando o operador $regex, retorne todos os filmes em que a descrição comece com a palavra "The".
db.movies.find({ description: { $regex: /^the/i } });

// 13. Utilizando o operador $regex, retorne todos os filmes em que a descrição termine com a palavra "humanity.".
db.movies.find({ description: { $regex: /humanity.$/i } });

// 1. Ordene alfabeticamente os restaurantes pelo nome (atributo name).
db.restaurants.find({}, { _id: 0, name: 1 }).sort({ name: 1 });

// 2. Ordene os restaurantes de forma decrescente baseado nas avaliações.
db.restaurants.find({}, { _id: 0, name: 1, rating: 1 }).sort({ rating: -1 });

-- 1. Crie uma view chamada film_with_categories utilizando as tabelas category, film_category e film do banco de dados sakila. Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW sakila.film_with_categories AS
  SELECT f.title, c.category_id, c.`name` FROM sakila.film_category fc
  INNER JOIN sakila.film f ON f.film_id = fc.film_id
  INNER JOIN sakila.category c ON c.category_id = fc.category_id
  ORDER BY f.title;

-- 2. Crie uma view chamada film_info utilizando as tabelas actor, film_actor e film do banco de dados sakila. Sua view deve exibir o actor_id, o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.
CREATE VIEW sakila.film_info AS
  SELECT
    a.actor_id,
    CONCAT(a.first_name, ' ', a.last_name) AS actor,
    f.title
  FROM sakila.film_actor fa
  INNER JOIN sakila.actor a ON a.actor_id = fa.actor_id
  INNER JOIN sakila.film f ON f.film_id = fa.film_id
  ORDER BY actor;

-- 3. Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila. Sua view deve exibir o address_id, o address, o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
CREATE VIEW sakila.address_info AS
  SELECT a.address_id, a.address, a.district, c.city_id, c.city FROM sakila.address a
  INNER JOIN sakila.city c ON c.city_id = a.city_id ORDER BY c.city;

-- 4. Crie uma view chamada movies_languages, usando as tabelas film e language do banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e o idioma do filme, como na imagem a seguir.
CREATE VIEW sakila.movies_languages AS
  SELECT f.title, l.language_id, l.`name` AS `language` FROM sakila.film f
  INNER JOIN sakila.`language` l ON l.language_id = f.language_id;

-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT M.title, B.domestic_sales, B.international_sales
FROM Pixar.Movies M INNER JOIN Pixar.BoxOffice B ON M.id = B.movie_id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT M.title, (B.domestic_sales + B.international_sales) AS sales
FROM Pixar.Movies M INNER JOIN Pixar.BoxOffice B ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT M.title, B.rating FROM Pixar.Movies M
INNER JOIN Pixar.BoxOffice B ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  T.`name` AS theater_name,
  T.location AS theater_location,
  M.title AS movie_title,
  M.director AS movie_director,
  M.`year` AS release_year,
  M.length_minutes
FROM Pixar.Theater T
LEFT JOIN Pixar.Movies M ON T.id = M.theater_id
ORDER BY T.`name`;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
  T.`name` AS theater_name,
  T.location AS theater_location,
  M.title AS movie_title,
  M.director AS movie_director,
  M.`year` AS release_year,
  M.length_minutes
FROM Pixar.Theater T
RIGHT JOIN Pixar.Movies M ON T.id = M.theater_id
ORDER BY T.`name`;

-- Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes com avaliação maior que 8.
SELECT M.id, M.title, M.director, M.`year`, M.length_minutes, M.theater_id
FROM Pixar.Movies M INNER JOIN Pixar.BoxOffice B ON M.id = B.movie_id
WHERE rating > 8;

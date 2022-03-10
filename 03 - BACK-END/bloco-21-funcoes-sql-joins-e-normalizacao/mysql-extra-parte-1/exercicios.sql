-- Exercício 1: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN, que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT title FROM Pixar.Movies
WHERE id IN (
  SELECT movie_id FROM Pixar.BoxOffice
  WHERE (domestic_sales + international_sales) >= 500000000
) AND length_minutes > 110;

SELECT m.title FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b ON b.movie_id = m.id
AND (b.domestic_sales + b.international_sales) >= 500000000
AND m.length_minutes > 110;

-- Exercício 2: Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs, informando o movie_id do filme que acaba de ser inserido na tabela movies, a executed_action como 'INSERT' e a log_date como a data atual.
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_insert_movies
BEFORE INSERT ON movies FOR EACH ROW
BEGIN
  SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER trigger_insert_movies_log
AFTER INSERT ON movies FOR EACH ROW
BEGIN
  INSERT INTO movies_logs(movie_id, executed_action, log_date)
  VALUES (NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

-- Exercício 3: Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies, deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing'. Caso contrário, insira o valor 'Decreasing'. Adicionalmente, insira um novo registro na tabela movies_logs, contendo informações sobre o registro alterado ( movie_id, executed_action e log_date ).
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_update_movies
BEFORE UPDATE ON movies FOR EACH ROW
BEGIN
  SET NEW.ticket_price_estimation = IF(
    OLD.ticket_price > NEW.ticket_price,
    'Decreasing',
    'Increasing'
  );
  INSERT INTO movies_logs(movie_id, executed_action, log_date)
  VALUES (NEW.movie_id, 'UPDATE', NOW());
END $$

DELIMITER ;

-- Exercício 5: Utilizando o EXISTS, selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT `name`, id FROM Pixar.Theater t
WHERE EXISTS (
  SELECT * FROM Pixar.Movies m
  WHERE t.id = m.theater_id
);

-- Exercício 6: Utilizando o EXISTS, selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT `name`, id FROM Pixar.Theater t
WHERE NOT EXISTS (
  SELECT * FROM Pixar.Movies m
  WHERE t.id = m.theater_id
);

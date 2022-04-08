-- 1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE GetMostPopularActors()
BEGIN
  SELECT actor_id, COUNT(*) AS number_of_films FROM film_actor
  GROUP BY actor_id ORDER BY number_of_films DESC LIMIT 10;
END $$

DELIMITER ;

-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE GetFilmsByCategory(IN filmCategory VARCHAR(45))
BEGIN
  SELECT f.film_id, f.title, c.category_id, c.`name` FROM film f
  INNER JOIN film_category fc ON fc.film_id = f.film_id
  INNER JOIN category c ON c.category_id = fc.category_id
  WHERE c.`name` = filmCategory;
END $$

DELIMITER ;

-- 3. Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE IsClientActiveOrNot(INOUT customer VARCHAR(90))
BEGIN
  SELECT
    CONCAT(
      'Customer ',
      SUBSTRING(first_name, 1, 1),
      LCASE(SUBSTRING(first_name, 2)),
      ' ',
      SUBSTRING(last_name, 1, 1),
      LCASE(SUBSTRING(last_name, 2)),
      IF(active = 1, ' is active', ' is unactive')
    ) AS customer_status INTO customerEmail
  FROM customer WHERE email = customerEmail;
END $$

DELIMITER ;

-- - Stored Procedures podem ser chamadas através do comando CALL, e o retorno de um valor é opcional;
-- - Já as Stored Functions são executadas com o comando SELECT e obrigatoriamente retornam algum valor;
-- - A Stored Functions não pode ser utilizada para alterar o estado global da base dados. (Ex. Por meio das instruções INSERT, UPDATE e DELETE );
-- - Stored Procedures permite alterar o estado global.
-- - Stored Procedures permitem realizar o tratamento de excepções, via try/catch.

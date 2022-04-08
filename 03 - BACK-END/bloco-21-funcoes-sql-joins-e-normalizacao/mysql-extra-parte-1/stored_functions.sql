-- 1. Utilizando a tabela sakila.payment, monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetTotalPayments(id INT)
RETURNS DOUBLE READS SQL DATA
BEGIN
  DECLARE totalSum DOUBLE;
  SELECT SUM(amount) FROM payment
  WHERE customer_id = id INTO totalSum;
  RETURN totalSum;
END $$

DELIMITER ;

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id, retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION GetFilmNameByInventoryId(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
  DECLARE filmName VARCHAR(200);
  SELECT f.title FROM inventory i
  INNER JOIN film f ON f.film_id = i.film_id
  WHERE f.film_id = id LIMIT 1 INTO filmName;
  RETURN filmName;
END $$

DELIMITER ;

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action', 'Horror') e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER $$

CREATE FUNCTION NumberOfFilmsByCategory(categoryName VARCHAR(90))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE numberOfFilms INT;
  SELECT COUNT(*) FROM film_category fc
  INNER JOIN category c ON c.category_id = fc.category_id
  WHERE c.`name` = categoryName INTO numberOfFilms;
  RETURN numberOfFilms;
END $$

DELIMITER ;

-- - Stored Procedures podem ser chamadas através do comando CALL, e o retorno de um valor é opcional;
-- - Já as Stored Functions são executadas com o comando SELECT e obrigatoriamente retornam algum valor;
-- - A Stored Functions não pode ser utilizada para alterar o estado global da base dados. (Ex. Por meio das instruções INSERT, UPDATE e DELETE );
-- - Stored Procedures permite alterar o estado global.
-- - Stored Procedures permitem realizar o tratamento de excepções, via try/catch.

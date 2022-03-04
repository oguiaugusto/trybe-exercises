-- 1. Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor_name, fa.film_id
FROM sakila.actor a INNER JOIN sakila.film_actor fa ON a.actor_id = fa.actor_id;

--  2. Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s INNER JOIN sakila.address a
ON s.address_id = a.address_id;

--  3. Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT c.customer_id, c.first_name, c.email, c.address_id, a.address
FROM sakila.customer c INNER JOIN sakila.address a
ON c.address_id = a.address_id ORDER BY c.first_name LIMIT 100;

--  4. Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer c INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

--  5. Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT c.first_name, COUNT(a.address) AS address_amount
FROM sakila.customer c INNER JOIN sakila.address a
ON c.address_id = a.address_id WHERE c.active = 1
GROUP BY c.first_name ORDER BY first_name DESC;

--  6. Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT s.first_name, s.last_name, AVG(p.amount) AS average_payment
FROM sakila.staff s INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

--  7. Monte uma query que exiba o id do ator, nome, id do filme e título do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT
  act.actor_id,
  CONCAT(act.first_name, ' ', act.last_name) AS actor_name,
  fil.film_id,
  fil.title AS film_title
FROM sakila.actor act INNER JOIN sakila.film_actor fa ON act.actor_id = fa.actor_id
INNER JOIN sakila.film fil ON fil.film_id = fa.film_id;

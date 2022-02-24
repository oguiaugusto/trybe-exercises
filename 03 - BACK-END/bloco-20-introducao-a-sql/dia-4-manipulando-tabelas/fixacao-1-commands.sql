-- 1. Insira um novo funcionário na tabela sakila.staff.
INSERT INTO sakila.staff (first_name, last_name, staff_id, address_id, store_id, active, username, last_update)
  VALUES ('John', 'Doe', 3, 5, 2, 1, 'JohnD', NOW());

-- 2. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
INSERT INTO sakila.staff (first_name, last_name, staff_id, address_id, store_id, active, username, last_update)
VALUES ('Mark', 'Denver', 4, 6, 1, 1, 'Mark', NOW()),
('Mary', 'Spencer', 5, 7, 2, 1, 'Mary', NOW());

-- 3. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor (first_name, last_name, last_update)
  SELECT first_name, last_name, last_update
  FROM sakila.customer ORDER BY customer_id LIMIT 5;
  
-- 4. Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO sakila.category (`name`, last_update)
  VALUES ('Time Travel', NOW()),
  ('Teen' , NOW())
  ('Fantasy', NOW());
  
-- 5. Cadastre uma nova loja na tabela sakila.store.
INSERT INTO sakila.store (manager_staff_id, address_id, last_update)
  VALUES (3, 3, NOW());
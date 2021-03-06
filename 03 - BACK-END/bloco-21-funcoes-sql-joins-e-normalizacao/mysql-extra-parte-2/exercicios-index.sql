-- 1. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila), adicionando-o na coluna name. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE FULLTEXT INDEX index_category_name ON sakila.category(`name`);
-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action'); -- Query cost: 1.20

DROP INDEX index_category_name ON sakila.category;
-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%'; -- Query cost: 4.20


-- 2. Verifique o impacto de um INDEX na tabela address (banco de dados sakila) adicionando-o na coluna postal_code. Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

CREATE INDEX index_postal_code ON sakila.address(postal_code);
DROP INDEX index_postal_code ON sakila.address;

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- Query cost
-- - Com index: 1.20
-- - Sem index: 126.60
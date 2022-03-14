-- Para clonar uma tabela existente:
CREATE TABLE (tabela) LIKE (tabela_de_referencia);
-- OBS: esse comando clona apenas a estrutura.
-- OBS2: também pode copiar tabelas entre bancos de dados.


------ ** ------


-- Para criar uma view de uma (ou mais) tabela(s)
CREATE VIEW AS query;


------ ** ------


-- Para alterar tabelas:

-- Adicionar uma nova coluna
ALTER TABLE (tabela) ADD COLUMN (nome_coluna) (tipo_e_propriendades);

-- Modificar o tipo e propriedades de uma coluna
ALTER TABLE (tabela) MODIFY (nome_coluna) (tipo_e_propriendades);

-- Adicionar incremento automático a uma coluna
-- (especifique o tipo da coluna + auto_increment)
ALTER TABLE (tabela) MODIFY (nome_coluna) (tipo_e_propriendades) auto_increment;

-- Alterar o tipo e nome de uma coluna
ALTER TABLE (tabela) CHANGE (nome_coluna_antiga) (nome_coluna_nova) (tipo_e_propriendades);

-- Dropar/Excluir uma coluna
ALTER TABLE (tabela) DROP COLUMN (nome_coluna);

-- Adicionar uma nova coluna após outra
ALTER TABLE (tabela) ADD COLUMN (nome_coluna) (tipo_e_propriendades) AFTER (nome_outra_coluna);


------ ** ------


-- Para criar e excluir indexes:

CREATE INDEX (nome_do_index) ON tabela(coluna);
CREATE FULLTEXT INDEX (nome_do_index) ON tabela(coluna);
CREATE UNIQUE INDEX (nome_do_index) ON tabela(coluna);

DROP INDEX (nome_do_index) ON tabela;
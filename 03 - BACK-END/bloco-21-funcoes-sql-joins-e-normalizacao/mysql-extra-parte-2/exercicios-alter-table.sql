-- 1. Escreva uma query SQL para alterar na tabela locations o nome da coluna street_address para address, mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.locations CHANGE STREET_ADDRESS ADDRESS varchar(40);

-- 2. Escreva uma query SQL para alterar na tabela regions o nome da coluna region_name para region, mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.regions CHANGE REGION_NAME REGION varchar(25) unique;

-- 3. Escreva uma query SQL para alterar na tabela countries o nome da coluna country_name para country, mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.countries CHANGE COUNTRY_NAME COUNTRY varchar(40);

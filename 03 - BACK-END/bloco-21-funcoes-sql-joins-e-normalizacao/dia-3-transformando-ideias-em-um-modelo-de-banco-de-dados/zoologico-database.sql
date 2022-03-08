CREATE SCHEMA IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE gerentes(
  gerente_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidadores(
  cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  gerente_id INT NOT NULL,
  
  CONSTRAINT FOREIGN KEY (gerente_id) REFERENCES gerentes (gerente_id)
) ENGINE=InnoDB;

CREATE TABLE localizacao(
  localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE animais(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  especie VARCHAR(45) NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  idade INT NOT NULL,
  localizacao_id INT NOT NULL,
  cuidador_id INT NOT NULL,
  
  CONSTRAINT FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id),
  CONSTRAINT FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id)
) ENGINE=InnoDB;

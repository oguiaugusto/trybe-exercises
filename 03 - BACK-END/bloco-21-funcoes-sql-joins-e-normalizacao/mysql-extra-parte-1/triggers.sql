-- Triggers são blocos de código SQL que são disparados em reação a alguma atividade que ocorre no banco de dados. Eles podem ser disparados em dois momentos distintos, e é possível definir condições para esse disparo.

-- 1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros, defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_insert
BEFORE INSERT ON carros FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'INSERÇÃO',
      NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

-- 2. Crie um TRIGGER que, a cada atualização feita na tabela carros, defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO'.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_update
BEFORE UPDATE ON carros FOR EACH ROW
BEGIN
  SET NEW.data_atualizacao = NOW(),
      NEW.acao = 'ATUALIZAÇÃO';
END $$

DELIMITER ;

-- 3. Crie um TRIGGER que, a cada exclusão feita na tabela carros, envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER trigger_car_delete
BEFORE DELETE ON carros FOR EACH ROW
BEGIN
  INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
  VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;

-- Exercício 4: Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs, onde devem ser guardados a data da exclusão, a executed_action 'DELETE' e o id do filme excluído.
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER trigger_delete_movies
BEFORE DELETE ON movies FOR EACH ROW
BEGIN
  INSERT INTO movies_logs(movie_id, executed_action, log_date)
  VALUES (OLD.movie_id, 'DELETE', NOW());
END $$

DELIMITER ;

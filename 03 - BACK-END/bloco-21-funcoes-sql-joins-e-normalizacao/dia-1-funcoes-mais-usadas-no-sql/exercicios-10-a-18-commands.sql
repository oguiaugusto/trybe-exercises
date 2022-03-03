-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id.
SELECT DEPARTMENT_ID, JOB_ID, AVG(SALARY) AS AVERAGE_SALARY,
COUNT(*) AS EMPLOYEES_NUMBER FROM hr.employees
GROUP BY DEPARTMENT_ID HAVING EMPLOYEES_NUMBER > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
UPDATE hr.employees
SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, 515, 777)
WHERE PHONE_NUMBER LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID, FIRST_NAME,
YEAR(HIRE_DATE) AS HIRE_YEAR FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID, FIRST_NAME,
DAY(HIRE_DATE) AS HIRE_DAY FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID, FIRST_NAME,
MONTH(HIRE_DATE) AS HIRE_MONTH FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT LAST_NAME, HIRE_DATE FROM hr.employees
WHERE YEAR(HIRE_DATE) = 1987 AND MONTH(HIRE_DATE) = 7;

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT FIRST_NAME, LAST_NAME,
DATEDIFF(CURRENT_DATE(), HIRE_DATE) AS WORKING_DAYS FROM hr.employees;

-- 1. Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT
  CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS EMPLOYEE_NAME,
  CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS MANAGER_NAME
FROM hr.employees E
INNER JOIN hr.employees M ON E.MANAGER_ID = M.EMPLOYEE_ID
WHERE E.DEPARTMENT_ID <> M.DEPARTMENT_ID;

-- 2. Exiba o Nome e a quantidade de pessoas lideradas de cada gerente.
SELECT
  CONCAT(M.FIRST_NAME, ' ', M.LAST_NAME) AS MANAGER_NAME,
  COUNT(E.EMPLOYEE_ID) AS MANAGED_PEOPLE_AMOUNT
FROM hr.employees M
INNER JOIN hr.employees E ON M.EMPLOYEE_ID = E.MANAGER_ID
GROUP BY MANAGER_NAME;

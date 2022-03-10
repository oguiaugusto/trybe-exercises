-- 1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT id, Title FROM hotel.Books b
WHERE NOT EXISTS (
  SELECT * FROM hotel.Books_Lent bl
  WHERE b.id = bl.book_id
);

-- 2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT id, Title FROM hotel.Books b
WHERE EXISTS (
  SELECT * FROM hotel.Books_Lent bl
  WHERE b.id = bl.book_id
) AND Title LIKE '%lost%';

-- 3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT Name FROM hotel.Customers ct
WHERE NOT EXISTS (
  SELECT * FROM hotel.CarSales cs
  WHERE ct.CustomerId = cs.CustomerID
);

-- 4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT ct.`Name`, cr.`Name` FROM hotel.Customers ct
INNER JOIN hotel.Cars cr
WHERE EXISTS (
  SELECT * FROM hotel.CarSales cs
  WHERE cs.CarID = cr.Id AND cs.CustomerID = ct.CustomerId
);

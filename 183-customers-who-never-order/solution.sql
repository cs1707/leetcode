# Write your MySQL query statement below
SELECT Customers.name as Customers 
FROM Customers, Orders
WHERE Customers.Id NOT IN SELECT CustomerId FROM Orders;

# Write your MySQL query statement below
SELECT Name AS Employee FROM (SELECT Name, MAX(Salary) FROM Employee WHERE ManagerId IS NOT NULL);
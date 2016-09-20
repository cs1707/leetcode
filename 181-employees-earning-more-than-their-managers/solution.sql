# Write your MySQL query statement below
SELECT a.Name AS Employee FROM Employee a
INNER JOIN Employee b
ON a.managerId = b.Id AND a.Salary > b.Salary;
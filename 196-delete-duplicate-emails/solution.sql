# Write your MySQL query statement below
DELETE FROM Person
WHERE Id NOT IN (SELECT * FROM Person GROUP BY Id ORDER BY Id ASC);
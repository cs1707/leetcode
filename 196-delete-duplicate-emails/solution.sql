# Write your MySQL query statement below
DELETE FROM Person
WHERE Id NOT IN (SELECT Id FROM Person GROUP BY Email ORDER BY Id ASC);
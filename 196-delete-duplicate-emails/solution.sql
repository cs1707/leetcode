# Write your MySQL query statement below
DELETE a FROM Person a
WHERE Id NOT IN (SELECT Id FROM Person GROUP BY Email ORDER BY Id ASC);
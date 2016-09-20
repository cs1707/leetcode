# Write your MySQL query statement below
DELETE FROM Person
WHERE Id NOT IN (SELECT a.Id FROM Person a GROUP BY Email ORDER BY Id ASC);
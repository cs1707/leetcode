# Write your MySQL query statement below
DELETE FROM Person 
WHERE Id NOT IN (SELECT * FROM (SELECT MIN(id) FROM Person p GROUP BY Email) t);
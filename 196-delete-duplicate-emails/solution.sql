# Write your MySQL query statement below
DELETE FROM Person a
WHERE a.Id NOT IN (SELECT b.Id FROM Person b GROUP BY Id ORDER BY Id ASC);
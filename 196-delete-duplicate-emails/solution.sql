# Write your MySQL query statement below
DELETE FROM Person a
WHERE a.Id NOT IN (SELECT b.Id FROM Person b GROUP BY b.Id ORDER BY b.Id ASC);
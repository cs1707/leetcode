# Write your MySQL query statement below
DELETE a FROM Person a
WHERE a.Id NOT IN (SELECT b.Id FROM Person b GROUP BY b.Email ORDER BY b.Id ASC);
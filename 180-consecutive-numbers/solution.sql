# Write your MySQL query statement below
SELECT a.Id FROM Logs a
INNER JOIN Logs b
ON a.Id + 1 = b.Id
INNER JOIN Logs c
ON a.Id + 2 = c.Id
GROUP BY Num;
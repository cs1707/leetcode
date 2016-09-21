# Write your MySQL query statement below
SELECT a.Num AS ConsecutiveNums FROM (Logs a
INNER JOIN Logs b
ON a.Id + 1 = b.Id)
INNER JOIN Logs c
ON b.Id + 1 = c.Id
WHERE a.Num = b.Num AND a.Num = c.Num
GROUP BY a.Num;
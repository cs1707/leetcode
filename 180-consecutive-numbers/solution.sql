# Write your MySQL query statement below
SELECT Num AS ConsecutiveNums 
FROM Logs a
INNER JOIN Logs b
ON a.Id + 1 = b.Id 
AND a.Num = b.Num
GROUP BY a.Num
HAVING COUNT(a.Num) >= 3;
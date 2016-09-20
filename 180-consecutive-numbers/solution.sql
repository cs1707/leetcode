# Write your MySQL query statement below
SELECT * FROM Logs 
GROUP BY Num
WHERE count(Num) >= 3;
# Write your MySQL query statement below
SELECT a.Id From Weather a
INNER JOIN Weather b
ON DATE_SUB(a.Date, INTERVAL 1 DAY) = b.DATE
AND a.Temperature > b.Temperature;
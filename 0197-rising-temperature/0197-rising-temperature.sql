# Write your MySQL query statement below
SELECT x.id
FROM Weather x, Weather y
WHERE dateDiff(x.recordDate, y.recordDate) = true AND x.temperature > y.temperature
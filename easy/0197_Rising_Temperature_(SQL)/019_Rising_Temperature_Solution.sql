# Write your MySQL query statement below

select W2.id
from Weather W1, Weather W2
where DATE(DATE_ADD(W1.recordDate, interval 1 day)) = W2.recordDate
and W1.temperature < W2.temperature
# Write your MySQL query statement below
select distinct A.email as Email
from Person as A
inner join Person as B
on (A.email = B.email)
where A.id != B.id
# Write your MySQL query statement below

select name as Customers
from Customers
where customers.id not in (select customers.id
from Customers inner join Orders
on customers.id = orders.customerid)
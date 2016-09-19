# 175. Combine Two Tables

[Original Page](https://leetcode.com/problems/combine-two-tables/)

Table: `Person`

<pre>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.
</pre>

Table: `Address`

<pre>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.
</pre>

Write a SQL query for a report that provides the following information for each person in the Person table, regardless if there is an address for each of those people:

<pre>FirstName, LastName, City, State
</pre>

<div>

[Subscribe](/subscribe/) to see which companies asked this question

</div>
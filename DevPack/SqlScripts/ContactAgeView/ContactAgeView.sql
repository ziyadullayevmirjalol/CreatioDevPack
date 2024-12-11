create or alter view JamesVwContactAgeDays
as
select Id as JamesUsrId, Name as JamesUsrName, BirthDate as JamesUsrBirthDate,
datediff(day, BirthDate, getDate()) as JamesUsrAgeDays,
Id as JamesUsrContactId
from Contact
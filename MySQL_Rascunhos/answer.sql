select first_name, last_name, DEPARTMENT_ID from employees
where DEPARTMENT_ID = 30 or DEPARTMENT_ID = 100
order by first_name asc;

select MANAGER_ID, min(SALARY) from employees GROUP BY(MANAGER_ID);

select FIRST_NAME, LAST_NAME, SALARY from employees
where SALARY > 4000.00
order by SALARY asc;

select FIRST_NAME, LAST_NAME, JOB_ID, DEPARTMENT_ID from employees
where DEPARTMENT_ID = 40; /*Só tem o Departamento 40 em Londres */

select departments.DEPARTMENT_NAME, count(employees.EMPLOYEE_ID)
from departments join employees 
on departments.DEPARTMENT_ID = employees.DEPARTMENT_ID
GROUP BY(departments.DEPARTMENT_NAME)
;
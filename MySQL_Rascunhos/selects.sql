select * from cursos /*select com ordem crescente*/
order by idcurso desc;

select ano, nome, carga from cursos /*Select colunas específicas*/
order by ano, nome; /*ordenadas por ano*/

select ano, nome, carga from cursos /*Select de cursos lançados em 2016, ordenados por ano e nome mostrando colunas específicas*/
where ano = '2016' 
order by ano, nome;

select nome, ano from cursos
where ano between 2014 and 2016 /*select de intervalos*/
order by ano desc, nome asc;

select nome, descricao, ano from cursos
where ano in (2014, 2016, 2020) /*select de dados específicos*/
order by ano;

select * from cursos
where nome like 'P%'; /* Que começa com P e vem "%" qualquer coisa depois*/

select * from cursos
where nome not like '%A%'; /*Tem um A, e vem qualquer coisa antes e depois dele*/

select distinct ano from cursos; /*Select anos distintos*/

select count(*) from cursos; /*contagem dos cursos*/

select max(carga) from cursos; /*maior carga do curso*/

select sum(carga) from cursos; /*soma da carga do curso*/

select avg(totaulas) from cursos; /*média do total de aulas por cursos*/
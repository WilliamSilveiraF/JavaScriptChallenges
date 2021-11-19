use cadastro; /*(Específica o banco de dados usado)*/

create table pessoas (/*Cria uma tabela, especificando os tipos primitivos*/
nome varchar(30),
idade tinyint,
sexo char(1),
peso float,
altura float,
nacionalidade varchar(20)
);

describe pessoas; /*(Descreve uma tabela)*/

drop database nomeDoDataBase; /*Exclui um dataBase*/


/*Diferença entre dois bancos de dados*/
create database cadastro /*Criando um banco de dados com coleção de caracteres*/
default character set utf8
default collate utf8_general_ci;


create database meubanco; /*Sem coleção de caracteres*/
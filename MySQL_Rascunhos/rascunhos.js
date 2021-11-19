use cadastro; //(Específica o banco de dados usado)

create table pessoas (//Cria uma tabela, especificando os tipos primitivos
nome varchar(30),
idade tinyint,
sexo char(1),
peso float,
altura float,
nacionalidade varchar(20)
);

describe pessoas; (Descreve uma tabela)
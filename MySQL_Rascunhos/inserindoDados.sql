use cadastro;

insert into pessoas /*insere uma nova pessoas conforme os atributos*/
(nome, nascimento, sexo, peso, altura, nacionalidade) /*Note que você não preenche o id devido ao auto_increment*/
values
('Godofredo', '1984-01-02','M','78.5','1.83', 'Brasil');

select * from pessoas; /*Mostra todos os cadastrados da tabela pessoa no meu banco de dados cadastro*/

/*Adicionando dados para uma tabela usando deafault. OBS: se a ordem está igual às propriedades especificadas na tabelas você pode ocultar a tipagem*/
use cadastro;
insert into pessoas values
(DEFAULT, 'Adalgiza', '1930-11-2', 'F', '63.2', '1.75', DEFAULT); //Usam o padrão default estabelecido na criação da tabela
select * from pessoas;

/*Sintaxe para adicionar vários dados em uma tabela numa só vez*/
use cadastro;
insert into pessoas values
(DEFAULT, 'Cláudio', '1975-4-22', 'M', '99.0', '2.15', 'Brasil'),
(default, 'Pedro', '1999-12-3', 'M', '87', '2', default),
(default, 'Janaína', '1987-11-12', 'F', '75.4', '1.66', 'EUA');

select * from pessoas;
create database cadastro //Cria um dataBase chamado cadastro
default character set utf8 //Configura UTF8
default collate utf8_general_ci; //Coleção de acentos

create table `pessoas` (//Cria uma tabela chamada pessoas
    `id` int not null auto_increment,// not null (propriedade não pode se não nula), auto_increment vai cadastrando em ordem numérica crescente
    `nome` varchar(30) not null,//varchar(30) campo válido para 30 caracteres
    `nascimento` date, //cadastro de data de nascimento (Não é produtivo cadastrar idade)
    `sexo` enum('M','F'), //enum('M', 'F') só aceita os caracteres 'M' ou 'F'
    `peso` decimal(5, 2), //decimal(número de unidade, numéro de unidade pós a vírgula) ex: 000,00 (5 unidades, com 2 após a vírgula)
    `altura` decimal(3, 2),//decimal(3,2) = 00,0 | 3 unidades sendo 2 após a vírgula
    `nacionalidade` varchar(20) default 'Brasil', //default 'Brasil', se não preenchido padrão Brasil
    primary key (id) //Definindo o id como chave primária
) default charset = utf8; //charset padrão para a tablea utf8
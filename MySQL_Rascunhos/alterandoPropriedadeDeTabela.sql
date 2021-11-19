describe pessoas;

alter table pessoas /*Altere a tabela pessoas*/
add column profissao varchar(10); /*Adicione a coluna profissao com tipagem varchar(10) | Será adicionado no fim por padrão*/

alter table pessoas 
add column profissao varchar(10) after nome; /*Adiciona a coluna profissão com tipagem, depois da coluna nome*/

alter table pessoas
add column codigo int first; /*Adiciona a coluna código com tipagem int como primeira coluna da minha tabela*/

alter table pessoas
drop column profissao; /*Exclui a tabela profissão*/

alter table pessoas 
modify column profissao varchar(20); /*Modificando tipagem de colunas*/

alter table pessoas
modify column profissao varchar(50) NULL; /*Modificando tipagem e constraint*/

alter table pessoas
change column profissao prof varchar(50); /*renomeando uma coluna*/

alter table pessoas
rename to gafanhotos; /*Renomeando o nome de uma tabela*/

select * from pessoas;
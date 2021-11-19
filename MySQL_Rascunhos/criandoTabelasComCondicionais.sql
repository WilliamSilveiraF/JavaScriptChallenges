CREATE TABLE IF NOT EXISTS cursos ( /*Dispositivo de segurança para não apagar tabelas já criadas*/
nome varchar(30) NOT NULL UNIQUE,
descricao text,
carga int unsigned,
totaulas int unsigned,
ano year DEFAULT '2016'
) DEFAULT CHARSET = utf8;

alter table cursos
add primary key(idcurso); /*Adicionar chaves primárias*/

describe cursos;
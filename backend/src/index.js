const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
* Rotas / recursos
*/

/* 
* Métodos HTTP:
* 
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/* 
* Tipos de Parâmetros:
*
* Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*
*/

/* 
* SQL: MySql, MariaDB, Sqlite, PostreSQL, Oracle, MS-SQL Server
* NoSQL: MongoDB, CouchDB, etc.
*/

/* 
* Driver: 
*/




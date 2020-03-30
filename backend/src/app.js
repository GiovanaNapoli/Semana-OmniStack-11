const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate')
const routes = require('./routes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
/**
 * Rotas / Recurosos
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/listar uma informação no backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELET: Deletar uma informação no backend
  * 
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados e enviados na rota após '?' (Filtros, paginação)
  * Route Params: Parâmetros utilizados  para identificar recursos
  * Request body: Corpo da requisição, utilizado para criari ou alterar recursos
  */

  /**
   * Bancos de dados
   * 
   * SQL: MSQL, SQLite, PostegreSQL, ORACLE, Microsoft SQL server
   * NoSQL: MongoDB, CounchDB, etc...
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users')
    */


module.exports = app;
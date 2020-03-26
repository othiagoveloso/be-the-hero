const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();
app.use(cors()); // se for produção tem que colocar origin:http:... quem pode acessar sua API 
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros,paginação)
 * Como pegar: request.query
 * 
 * Routes Params: Parametros utilizados para identificar um unico recurso ex:(/:id)
 * como pegar: request.params
 * 
 * Request Body: Corpo da requisição, responsavel para criar ou alterar recurso
 * como pegar: request.body
 */

 /**
  * Query buider para querys SQL em formato javascript: Instalar Knex e depois o drive do seu banco
  * npx knex init -- para criar o arquivo knexfile 
  */

  /**
   * 
   * Criar a pasta database e dentro migrations
   * Colocar dentro do knexfile o apontamento para migrations
   * criar migrate, ex: npx knex migrate:make create_ongs
   * executar migrate npx knex migrate:latest
   * 
   * 
   */



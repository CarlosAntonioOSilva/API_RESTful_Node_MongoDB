/* ARQUIVO DE CONFIGURAÇÃO DO ESQUEMA DOS DADOS DOS USUÁRIOS NO BANCO DE DADOS */

/* Importa a conexão com o banco de dados configurada em "api\db\conn.js"*/
const mongoose = require('../db/conn');

/* Importa a classe "Schema" do módulo 
Mongoose para criação do esquema do banco de dados */
const { Schema } = mongoose;

/* Cria o schema para o banco de dados */
const User = mongoose.model(
  'User',
  new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    image:{type: String},
    phone: {type: String, required: true}
  },
  {timestamps: true}
  )
);

/* 
  Um esquema é um objeto JSON que define a estrutura e o conteúdo de seus dados.
  Os esquemas representam tipos de dados em vez de valores específicos.
*/

/* Exporta esté arquivo */
module.exports = User;


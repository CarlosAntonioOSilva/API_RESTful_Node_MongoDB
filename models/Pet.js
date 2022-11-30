/* ARQUIVO DE CONFIGURAÇÃO DO ESQUEMA DOS DADOS DOS ANIMAIS NO BANCO DE DADOS */

/* Importa a conexão com o banco de dados configurada em "api\db\conn.js"*/
const mongoose = require('../db/conn');

/* Importa a classe "Schema" do módulo 
Mongoose para criação do esquema do banco de dados */
const { Schema } = mongoose;

/* Cria o schema para o banco de dados */
const Pet = mongoose.model(
  'Pet',
  new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    weight: {type: Number, required: true},
    color:{type: String, required: true},
    images: {type: Array, required: true},
    available: {type: Boolean},
    user: Object,
    adopter: Object
  },
  {timestamps: true}
  )
);

/* 
  Um esquema é um objeto JSON que define a estrutura e o conteúdo de seus dados.
  Os esquemas representam tipos de dados em vez de valores específicos.
*/

/* Exporta esté arquivo */
module.exports = Pet;


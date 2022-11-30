/* CONFIGURA A CONEXÃO COM O BANCO MONGODB */

/* Importa o módulo "Mongoose" */
const mongoose = require('mongoose');

/* Criar a conexão com o banco "getapet" do MongoDB */
/* localhost:27017 => porta onde o MongoDB fica disponível */
async function main(){
  await mongoose.connect('mongodb://localhost:27017/getapet');
  console.log('Conectou ao Mongoose');
}

/* Imprime erro de conexão, se houver */
main().catch((err)=>console.log(err));

/* Exporta a conexão com o banco MongoDB */
module.exports = mongoose;
/* Importa o arquivo "Users.js" da pasta "models" */
const User = require('../models/Users')
/* Exporta a classe "UserController" */
module.exports = class UserController{
  /* Método estático chamado "register" */
  static async register(req, res){
    /* Atribui a variáveis dados do usuário
    recebidos na requisição post */

    /* const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const password = req.body.password
    const confirmpassword = req.body.confirmpassword */
    /* OU */

    const {name, email, phone, password, confirmapassword} = req.body

    /* Verificar se os dados foram recebidos */
    if(!name){
      res.status(422).json({message: 'O nome é obrigatório'})
    }
    if(!email){
      res.status(422).json({message: 'O e-mail é obrigatório'})
    }
    if(!phone){
      res.status(422).json({message: 'O phone é obrigatório'})
    }
    if(!password){
      res.status(422).json({message: 'A senha é obrigatório'})
    }


  }
}
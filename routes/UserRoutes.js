/* Importa o método "Router()" do módulo "Express" */
const router = require('express').Router()
/* Importa a classe "UserController" do arquivo "UserController.js" */
const UserController = require('../controllers/UserController')
/* Indica o método "register" da classe "UserController" como resposta 
a requisições do tipo "post" na rota "/register"*/
router.post('/register', UserController.register)

/* Exporta esté arquivo */
module.exports = router

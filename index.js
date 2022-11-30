/* Importa o módulo "Express" */
const express = require('express')
/* Importa o módulo "Cors" */
const cors = require('cors')
/* Instancia o "Express" */
const app = express()
/* Define a resposta no formato de JSON para o Express*/
app.use(express.json())
/* Solve CORS */
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
/* Indica ao Express uma página pública */
app.use(express.static('public'))
/* Importa o arquivo de rotas */
const UserRoutes = require('./routes/UserRoutes')
/* Indica à instância do Express o arquivo de rotas 
que deve ser usado */
app.use('/users', UserRoutes)
/* Indica à instância do Express a porta do servidor 
que deve escutar nas requisições/respostas à API */
app.listen(5000)
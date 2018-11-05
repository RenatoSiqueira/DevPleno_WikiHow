const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

const port = process.env.port || 3000

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.get('/', async (request, response) => {
    response.render('index')
})

app.listen(port, (err) => {
    if(err)
        console.log('error')
    else
        console.log('Como Fazer Server is Running on port: ' + port)
})
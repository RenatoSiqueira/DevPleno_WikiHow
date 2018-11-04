const express = require('express')
const app = express()
//const axios = require('axios')
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')

const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.use('/categorias', categorias)

app.use(bodyParser.urlencoded())
//https://www.youtube.com/watch?v=GD_1qLZTIA0

//let i = 10
app.get('/', async (request, response) => {
    //i++
    //response.send(`FullStack Lab ${i}`)
    //response.render('index', { i } )
    //const content = await axios.get(URL + 'teste.json')
    //console.log(content.data)
    response.render('index', {i: content.data})
})

app.listen(port, (err) => {
    if(err)
        console.log('error')
    else
        console.log('Como Fazer Server is Running on port: ' + port)
})
const express = require('express')
const app = express()

const port = process.env.port || 3000

app.get('/', (request, response) => {
    response.send('FullStack Lab')
})

app.listen(port, (err) => {
    if(err)
        console.log('error')
    else
        console.log('Como Fazer Server is Running on port: ' + port)
})
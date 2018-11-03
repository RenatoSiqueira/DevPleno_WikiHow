const fs = require('fs')

const callback = (err, content) => {
    if(err)
        console.log('Error: ', err) 
    else
        console.log( new String(content) )
}

fs.readFile('README.md', callback)
console.log('Fim do Arquivo')
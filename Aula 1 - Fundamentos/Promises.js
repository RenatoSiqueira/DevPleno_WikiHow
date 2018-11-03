const fs = require('fs')

const readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, content) => {
            if(err){
                reject(err)
            } else {
                resolve(content)
            }
        })
    })
}

// Promise
readFile('README.md')
    .then( content => console.log(content) )
    .catch( err => console.log(err) )

// Async/Await
const processaArquivos = async() => {
    const file1 = await readFile('README.md')
    console.log('File 1: ', String(file1))
    try {
        const file2 = await readFile('README-Erro.md')
        console.log('File 2: ', file2)
    } catch(err){
        console.log('File2: Erro', err)
    }
}

processaArquivos()
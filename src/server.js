const express = require('express')
const server = express()

//configurar pasta publica

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

//UTILIZANDO TEMPLATE ENGINE
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})


// configurar caminhos da minha aplicação
// pagina inicial
// req: requisição
// res: resposta
server.get("/", (req, res) => {
    return res.render('index.html')
})




//ligar o servidor
server.listen(3000)
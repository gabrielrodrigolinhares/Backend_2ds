const http = require('node:http')
const porta = 3000

const server = http.createServer((req, res) => {
 const urlTratada = new URL(req.url, `http://${req.headers.host}`)//limpeza da url
 const recurso = urlTratada.pathname //pega o recurso da url 

 if (recurso === '/') {
    res.setHeader('Content-Type', 'text/plain'); 'text/html; charset=utf-8'
    res.end('Bem-Vindo(a) \nHomepage \\o/')
    } else{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.statusCode = 401
    res.end('<h3>Erro 401 - Página não autorizada</h3>')
    }
})
server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})

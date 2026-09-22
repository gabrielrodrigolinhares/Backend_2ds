// importação moderna com ESM (import)
import express from 'express'

const app = express() // Instanciar Express

app.get('/', (req, res) => {
    res.send(`
        <h3>Página inicial</h3>\n
        <p>Loja esepcializada em roupas</p>`)
})
app.get('/roupas', (req, res) => {
    res.send('Minha roupa de sair...')
})

app.listen(4000, ()=> {console.log('Servidor está vivo"')})
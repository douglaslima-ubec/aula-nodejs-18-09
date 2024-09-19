const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/somar', (req, res) => {
    const numero1 = parseFloat(req.query.numero1)
    const numero2 = parseFloat(req.query.numero2)
    const resultado = numero1 + numero2
    res.send(`A soma de ${numero1} e ${numero2} é igual a ${resultado}`)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}...`))
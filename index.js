const express = require ('express')
const app = express()
const bodyPaser = require ('body-parser')

app.use(bodyPaser.json())

app.get('/api/filmes', (requisicao,respostas) =>{
    const filmes = [
        {nome: 'Vingadores:Guerra Infinita'},
        {nome:'Homem Aranha: Sem volta Pra casa'},
        {nome:'Shang-chi: a lenda dos dez aneis'}
    ]
    respostas.send(JSON.stringify(filmes))
})

app.listen(3000, () => console.log('A API ja esta funcionando '))

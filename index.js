const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

var toDos = [
    {name: 'node ', daystoend: '5', done: false},
    {name: 'JavaScript', daystoend: '33', done: false},
    {name: 'HTML', daystoend: '2', done: true},
    {name: 'dane na serwer', daystoend: '12', done: true}    
]

app.get('/', (req, res) =>{
    console.log('zapytanie')
    res.send('ok')
})

app.get('/gettodos', (req, res)=>{
    res.json(toDos)
})

app.get('/addtodo/:nazwa/:dni', (req, res)=>{
    const nazwa = req.params.nazwa
    const dni = req.params.dni

    const tmptodo = {name: nazwa, daystoend:dni, done: false}

    toDos.push(tmptodo)

    console.log('dodano zadanie o nazwie: '+ nazwa)
    console.log(tmptodo)
    res.send('OK')

})

app.listen(port)

const express = require('express');
const middlewareProva = require('./middlewareProva')
const auth = require('./auth')

const app = express();


// con app.use non devo passare middlewareProva in ogni funzione get
app.use(middlewareProva)


//se voglio usare il middleware SOLO nelle pagine /persone
// il middleware va messo sempre prima degli end point (app.get)

// app.use('/persone', [middlewareProva, auth])






app.get('/', (req,res) =>{
    res.send('Homepage')
})

app.get('/about',  (req,res) =>{
    res.send('About')
})


//qui uso solo la middleware auth
app.get('/area' , auth, (req,res) =>{
    res.send('area')
})

app.get('/persone/miao',  (req,res) =>{
    res.send('Persone: Miao')
})







app.listen(3000) 

const express = require('express');

const app = express()


app.use(express.static('public'))


// Lo slash / indica la Home
app.get('/', (req, res) => {
  res.sendFile('Homepage.html', {root: __dirname + '/public'})
})


app.get('/about', (req, res)=>{
    res.sendFile('About.html', {root: __dirname + '/public'})
})

app.get('/contatti', (req,res)=>{
    res.sendFile('Contatti.html', {root: __dirname + '/public'})
})


// L'asterisco significa per tutte le pagine
app.all('*', (req, res) => {
    res.sendFile('404.html', {root:__dirname + '/public'} )
})

app.listen(3000)
const express = require('express');
const app = express();


//bisogna usare questo middleware per fargli capire i json
app.use(express.json())



app.get('/', (req,res) =>{
    res.send('Homepage')
})

app.get('/utente',  (req,res) =>{
    res.json({ nome:"Elena", cognome: "Soave"})
})

app.post('/' , (req,res) =>{
    console.log(req.body);
    res.send("Ok post")
})

app.put('/',  (req,res) =>{
    console.log(req.body);
    res.send("Ok put")
})

app.delete('/',  (req,res) =>{
    
    res.send("Ok delete")
})



app.listen(3000) 
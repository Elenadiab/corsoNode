
const express = require('express');
const app = express()
const { persone } = require('./persone')

app.use(express.json())

app.get('/api/persone', (req,res) =>{
    res.status(200).json({success: true, data: persone})
})

app.get('/api/persone/:id', (req,res) =>{
    const { id } = req.params;
    const persona = persone.find(
        (persona) => persona.id === id
    );
    
    if (persona) {
        res.json({success:true, data: persona});
    } else {
        res.status(404).json({success:false, message: "Persona non trovata"});
    }
});


app.put('/api/persone/:id', (req, res) => {
    const { id } = req.params;
    const { cognome } = req.body;

    // Trova l'indice della persona nell'array persone
    const index = persone.findIndex(persona => persona.id === id);
    persone[index].cognome = cognome;
    res.status(200).json({ success: true, data: persone[index] });

});



app.delete('/api/persone/:id', (req,res) =>{
    const {id} = req.params
    const index = persone.findIndex(persona => persona.id === id)
    persone.splice(index,1)
    res.status(200).json({success: true, data:persone})
})

app.listen(3000);
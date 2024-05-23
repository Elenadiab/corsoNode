const express = require('express');

const persone = require('./persone');

const app = express();

app.get('/', (req,res) => {
    res.send("<h1>Homepage</h1> <a href='/persone'>Vai a persone</a>")
})


app.get('/persone', (req,res) =>{
    const nuovePersone = persone.map((persona)=>{
        const {nome,cognome,eta} = persona;
        return {nome,cognome,eta};
    })
    res.json(nuovePersone)
    
})



// TROVA PER ID
// app.get('/persone/:id', (req, res) => {
//     const id = req.params.id;
//     const persona = persone.find((persona) => persona.id === id);
//     if (persona) {
//         res.json(persona);
//     } else {
//         res.status(404).send("Persona non trovata"); 
//     }
// });





// TROVA CON QUERY
app.get('/persone/search', (req,res) => {
   const {query, limit} = req.query
   let personeFiltrate = [...persone]

   if (query) {
        personeFiltrate = personeFiltrate.filter((persona)=>{
            return persona.nome.startsWith(query)
        }) 
   }


   //Gestisco illimite dei risultati
   if (limit) {
        personeFiltrate = personeFiltrate.slice(0, Number(limit))
   }

   //se non trova nulla nella query
   if (personeFiltrate.length < 1 ){
    return res.status(200).json({success:true, data:[]})
   }
    // IMPORTANTE --- USARE IL RETURN PER CHIUDERE L ESECUZIONE, altrimenti se passa all operazione successiva ci troviamo davanti a 2 res per 1 sola req e quindi da errore


   res.status(200).json(personeFiltrate)
})




app.listen(3000)


















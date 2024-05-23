const express = require('express');

const prodotti = require('./prodotti');

const app = express();

app.get('/', (req,res)=>{
    res.send("<h1>Benvenuto nella Home</h1>")
})


app.get('/prodotti', (req,res)=>{
    const prodottiVisual = prodotti.map((prodotto)=>{
        const {marca,nome,utilizzo} = prodotto;
        return {marca,nome,utilizzo}
    })
    res.json(prodottiVisual)
})


// CERCA PER ID
// app.get('/prodotti/:id', (req, res) => {
//     const id = req.params.id;
//     const prodotto = prodotti.find((prodotto) => prodotto.id === id);

//     if (prodotto) {
//         res.json(prodotto); // Invia il prodotto trovato
//     } else {
//         res.send("Prodotto non trovato");
//     }
// });




// CERCA PER PROPRIETA (params)
// app.get('/prodotti/:id/industriali', (req,res)=>{
//     const id = req.params.id;
//     const prodotto = prodotti.find((prodotto) => prodotto.id === id);

//     if (prodotto.utilizzo && prodotto.utilizzo.industriale === true){
//         res.send(prodotto)
//     }else {
//         res.send("Prodotto solo per uso privato")
//     }
    
    
// })



// FILTRO LA RESPONSE CON UNA QUERY
app.get('/prodotti/search', (req, res) =>{
    const {query, limit} = req.query
    let prodottiFiltrati = [...prodotti]

    if (query) {
        prodottiFiltrati = prodottiFiltrati.filter((prodotto) =>{
            return prodotto.marca.startsWith(query)
        })
    }

    res.json(prodottiFiltrati);    

})


app.listen(3000)










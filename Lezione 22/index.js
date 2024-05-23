const express = require('express');
const app = express();
const personeRouter = require('./routes/persone')


app.use(express.json())

app.use('/api/persone', personeRouter)




app.listen(3000) 
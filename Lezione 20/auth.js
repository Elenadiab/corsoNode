const { log } = require("console")

const auth = (req, res, next) => {
    const {user} = req.query
    if (user == 'Luca'){
        next()
    }else{
        res.status(401).send('Non sei autorizzato')
    }
    log('Accesso effettuato')
    next()
    
}


//esporto il modulo
module.exports = auth
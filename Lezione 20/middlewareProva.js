

// la funzione middleware si pone tra la req e la res 
// req => funzione middleware => next() => res

const middlewareProva = (req, res, next) => {
    const {method, url} = req
    const time = new Date().getMinutes()
    console.log(method, url, time)
    next()
    //next serve per farlo passare alla res
}


//esporto il modulo
module.exports = middlewareProva
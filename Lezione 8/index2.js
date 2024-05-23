const http = require('http');

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        let titolo = '<h1>Sono un titolo dinamico</h1>'
        let paragrafo = '<p>Sono un paragrafo dinanico</p>'
        let pagina = titolo + paragrafo

        res.end(pagina)
    }else{
        res.end(`<h1>Pagina fuori servizio</h1>`)
    }
})

server.listen(3000);
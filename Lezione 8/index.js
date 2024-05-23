
// Modulo http
const { log } = require('console');
const http = require('http');


// Creo un Web Server
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end("Benvenuto nel mio sito con Node");
    } else if
        (req.url === '/edoardo') {
            res.end('questo è il profilo di Edoardo')
        }else{
            res.end(`<h1>EROORE</h1>
            <p>Torna alla <a href='/'><home</a>perchè la pagina non esiste</p>`)
        }

    
})

server.listen(3000);


const { log } = require('console');
const {createReadStream, writeFileSync} = require('fs');


// creo il file e ci scrivo
for (let i = 0; i < 100000; i++ ) {
    writeFileSync('./filegrande.txt', `Ciao riga nunmero ${i}\n`, {flag: 'a'});
};


//per mandare a schermo uso stream
const stream = createReadStream('./filegrande.txt');

stream.on('data', (result) =>{
    log(result);
})

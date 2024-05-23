

/* ------------------------ SYNC ---------------------- */

const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');


let prova = readFileSync('./cartella/prova.txt', 'utf8');
let ciao = readFileSync('./cartella/ciao.txt', 'utf8');


// così sovrascrivi 
writeFileSync('./cartella/prova.txt', ' sono un testo sostituito');

// così aggiungi (append)
writeFileSync('./cartella/ciao.txt', ' sono un testo aggiunto', {flag:'a'});

// così crei un file e ci scrivi
writeFileSync('./cartella/nuovoFileSync.txt', 'questo file e il suo contenuto sono creati con  node')


/* ---------------------- ASYNC ------------------------- */

const {readFile, writeFile} = require('fs');

readFile('./cartella/prova.txt', 'utf8', (error,result) =>{
    if (error){
        console.log(error);
        return
    }else{
        let provaAsync = result;
        // log(provaAsync)
        readFile('./cartella/ciao.txt', 'utf8', (error,result) =>{
            if (error) {
                console.log(error)
                return
            }

            let ciao = result;
            // log(ciao);
            writeFile ('./cartella/nuovoFileAsync.txt', 'sono un testo asincrono', (error,result)=>{
                if (error) {
                    log(error)
                    return
                }else{
                    log(result)
                }
            })

        })

    }
})


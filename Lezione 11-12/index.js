const { log } = require('console');
const EventEmitter = require('events');

const customEmitter = new EventEmitter;

customEmitter.on('messaggio', (nome, anno) =>{
    log(`ciao ${nome} sono partito nel ${anno}`)
})
customEmitter.on('messaggio', (nome) =>{
    log(nome)
})
customEmitter.on('messaggio', () =>{
    log("sono andata al lavoro")
})

customEmitter.emit('messaggio', 'elena', 2024)

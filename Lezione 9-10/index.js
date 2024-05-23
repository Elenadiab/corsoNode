//Per convenzione a lodash viene assegnata la variabile underscore _

const _ = require('lodash');

const oggetti = [1, [2, [3, [4]]]];

const oggetti2 = _.flatMapDeep(oggetti) ;

console.log(oggetti);
console.log(oggetti2);
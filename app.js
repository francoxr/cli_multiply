const { crearArchivo } = require('./helpers/multplicar');
const argv = require('./config/yargs');
const colors = require('colors');

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'.rainbow))
    .catch( err => console.log(err))
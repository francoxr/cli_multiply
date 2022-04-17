const argv = require('yargs')
                .options({
                    'b':{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h':{
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Cantidad de numeros de la tabla de multiplicar'
                    }
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un Numero'
                    }
                    return true
                })
                .argv;

module.exports = argv;
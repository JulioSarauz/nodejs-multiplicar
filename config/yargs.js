//const fs = require('fs');
//importacion simple
let opt = {
    base: {
        demand: true,
        alias: 'b',
        description: 'la base de la tabla de multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
};


const argv = require('yargs')
    .command('crear', 'Crear un archivo con la tabla de multiplicar', opt)
    .command('listar', 'Listar una tabla', opt).help().argv;

module.exports = {
    args
};
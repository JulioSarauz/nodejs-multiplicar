//const fs = require('fs');
//importacion simple

const { argv } = require('./config/yargs')
const { crearArchivo, listar } = require(`./multiplicacion/multiplicar`)
let comando = argv._[0];
console.log(comando);

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(er => console.log(er));
        console.log('crear....');
        break;
    case 'listar':
        listar(argv.base, argv.limite)
            .then(archivo => console.log(`Listado:\n${archivo}`))
            .catch(er => console.log(er));
        console.log('listar....');
        break;
    default:
        console.log('comando no valido');
}
console.log(comando);



//const { crearArchivo } = require('./multiplicacion/multiplicar')
//importacion con destructuracion

// let regx = '/(\d+)f';
// let vase = process.argv[2].match(regx);

// let base = process.argv[2].split('=')[1];
// console.log(process.argv[2]);



// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(er => console.log(er));
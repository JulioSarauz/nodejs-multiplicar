const fs = require('fs');

let crearArchivo = (base, lim) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        for (let i = 1; i < lim + 1; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        //append
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else {
                resolve(`tabla-${base}`);
            }

        });
    });
}
let listar = (base, lim) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor ${base} no es un número`);
            return;
        }
        for (let i = 1; i < lim + 1; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }
        resolve(data)

        //append
    });
}

module.exports = {
    crearArchivo,
    listar
};
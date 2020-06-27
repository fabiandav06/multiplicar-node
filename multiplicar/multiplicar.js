// Requierds
const fs = require('fs');
var colors = require('colors');

// const { rejects } = require('assert');
// const { number } = require('yargs');
// const { resolve } = require('path');

let listarTabla = (base, limite = 10) => {

    let data = '';

    console.log('========================'.green);
    console.log(` == Tabla del ${base} al ${limite} ==`.green);
    console.log('========================'.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    };
    console.log(data);
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base que se introdujo no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(colors.red(`tabla-${base}-al-${limite}.txt`));
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
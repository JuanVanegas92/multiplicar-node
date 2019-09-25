//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        let tabla = base * i;
        console.log(`${base} x ${i} =${tabla}\n`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            let tabla = base * i;
            data += `${base} x ${i} =${tabla}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
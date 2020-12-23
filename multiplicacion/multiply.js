const fs = require('fs');

const createList = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
        }

        if (!Number(limit)) {
            reject(`${limit} no es un numero`);
        }

        resolve(multiply(base, limit));
    })
}

const createFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`${base} no es un numero`);
        }

        if (!Number(limit)) {
            reject(`${limit} no es un numero`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, multiply(base, limit), (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        })
    })
}

const multiply = (base, limit) => {
    let content = '';

    for (let i = 1; i <= limit; i++) {
        if (i === 1) {
            content += `tabla del numero ${base} multiplicada hasta el numero ${limit}:\n\n`;
        }
        content += `${base} * ${i} = ${base * i}\n`;
    }

    return content;
}

module.exports = {
    createFile,
    createList
}
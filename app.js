const { createFile, createList } = require('./multiplicacion/multiply');
const yargs = require('./config/yargs').yargs;

const command = yargs._[0];
const base = yargs.base;
const limit = yargs.limit;

switch (command) {
    case 'list':
        createList(base, limit).then(content => console.log(content)).catch(err => console.error(err));
        break;
    case 'create':
        createFile(base, limit).then(file => console.log(`Archivo creado correctamente: ${file}`)).catch(err => console.error(err));
        break;
    default:
        console.log('comando no valido');
}
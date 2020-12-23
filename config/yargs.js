const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: '10',
    }
}
const yargs = require('yargs')
    .command('list', 'Imprime en consola la tabla de multiplicar', opts)
    .command('create', 'Crea el archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    yargs
}
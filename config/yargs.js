const { Module } = require('module');

const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        alias: 'c',
        default: false,
        desc: 'Marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento o tarea por realizar', opts)
    .command('listar', 'Lista los elementos o tareas por realizar', opts)
    .command('actualizar', 'Actualiza un elemento o tarea', opts)
    .command('borrar', 'Borrar un elemento o tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}
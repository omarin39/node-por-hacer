const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        console.log('========Actividades por realizar======='.green);

        for (let index = 0; index < listado.length; index++) {
            console.log(listado[index].descripcion);
            console.log('Estado: ', listado[index].completado);
        }

        console.log('==================================='.green);


        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');
        break;
}
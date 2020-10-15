
const persona={
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New York',
        zip:555245,
        lat:14.3232,
        lng:345892
    }
};

//console.table({persona}); Esta linea muesta el objeto en forma
// de tabla
console.log(persona);

//Los 3 puntos es una funcion de Javascript para hacer una copia
//de un objeto trayendome todas sus propiedades
//De esta manera persona y persona 2 no apuntan al mismo
//Espacio en memoria
const persona2={...persona};

persona2.nombre='Peter';

console.log(persona2);

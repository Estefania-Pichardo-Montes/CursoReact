


const nombre   = 'Estefania';
const apellido = 'Pichardo';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


export function getSaludo(nombre='Oliver') {
    return 'Hola ' + nombre +'!';
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
 console.log("Hola Mundo");

 const nombre='Estefania';
 const apellido='Pichardo';

//  const nombreCompleto=nombre+' '+apellido;


 //Los template strings es para no tener que hacer ese tipo de
 //concatenaciones clasicas, esta manera es mas facil

 //Esta forma respeta los espacios y saltos de linea
 const nombreCompleto= `${nombre }  ${apellido} `;

 console.log(nombreCompleto);

 function getSaludo(nombre){
     
     return 'Hola ' + nombre;
 }

 console.log(`Este es un texto ${getSaludo(nombre)}`)



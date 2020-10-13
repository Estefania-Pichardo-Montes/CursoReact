// console.log("Hola Mundo");

//Variables y constantes 

//Var no se debe de usar en su lugar usar const y let

//Las constantes van a ser variables que no se van a renombrar
const nombre='Estefania';

//Si la variable puede cambiar dejarlo como let
const apellido='Pichardo';

let valorDado=5;
valorDado=4;
console.log(nombre,apellido,valorDado);

if(true){
    //Este valor dado solo existe en este ambito de scope
    let valorDado=6;
    const nombre='Bellamy';
    console.log(valorDado);
    console.log(nombre);
}
console.log(valorDado);
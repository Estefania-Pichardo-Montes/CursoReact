
//Arreglos en javascript

//No es recomendable declarar arreglo= new array();
const arreglo= [1,2,3,4];

//No es recomendable usar el push, de preferencia usar
//el operador spread osea añadir los 3 puntos ...

// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2=[...arreglo,5];

//El metodo map crea un nuevo arrelgo con los resultados de la 
//funcion indicada

//Aqui funcition se ejecuta por cada posicion del arreglo
//No modifica el arreglo anterior, sino que crea su propio arreglo
const arreglo3= arreglo2.map(function(numero){
    return numero*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
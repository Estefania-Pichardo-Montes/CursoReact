//Desestructuracion de arreglos
const personajes=['Oliver','Felicity','Barry']

//Las comas son el numero de indices que se esta saltando
const[,,p3]=personajes;

console.log(p3);

const retornaArreglo=()=>{
    return['ABC',123];
}

const [letras, numeros]=retornaArreglo();

console.log(letras, numeros);

//Tarea 

//1. El primer valor del arreglo se llamara nombre
//2. El segundo se llamara setNombre
const useState=(valor)=>{
    return[valor,()=>{console.log('Hola Mundo')}];
}
const [nombre, setNombre]=useState('Oliver');
console.log(nombre);
setNombre();
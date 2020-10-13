//Clase importante
//Desestructuracion de objetos
//O asignacion desestructurante

const persona={
    nombre:'Clarke Griffin',
    edad:24,
    clave:'Wanheda',
    rango:'Lider'
};
//Extrae lo que viene dentro de las llaves del objeto asignado
// const {nombre, edad,clave}=persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


//Se usa mucho la desestructuracion en el argumento
const useContext=({clave,nombre, edad, rango='Comandante'})=>{
    // console.log(nombre, edad,rango);
    return{

        nombreClave:clave,
        anios:edad,
        lating:
        {
            lat:14.365241,
            lng:-12.36582
        }
        
    }
}

const {nombreClave, anios,lating:{lat,lng}}= useContext(persona);

console.log(nombreClave,anios);
console.log(lat, lng);

//Promesas en javscript

//Las promesas son asincronas y hasta que se termine todo lo sincrono ejecutara el resultado de las promesas

//Tienen 2 argumentos, resolve y reject
//Result se ejecuta cuando la promesa fue exitosa
//Reject se ejecuta cuando la promesa falla o algo no se puede cumplir

import {getHeroeByID} from './bases/08-Import-Export'
import { owners } from './Data/Heroes';

console.log(owners);

// const promesa= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //Tarea 
//         //importar la funcion get heroe by id

//         const heroe=getHeroeByID(2);
//          resolve(heroe);
//         // reject("No se pudo encontrar el heroe")

//     },2000)

// });

// //Then cuando la promesa se cumplio correctamente
// //Catch para cuando dio un error
// //Finally para cuando se termina de ejecutar
// promesa.then((heroe)=>{
//    console.log('heroe', heroe) 
// })
// .catch(err=>console.warn(err));

const getHeroeByIdAsync=(id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //Tarea 
            //importar la funcion get heroe by id
    
            const heroe=getHeroeByID(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject("No se pudo encontrar el heroe")
            }
             
            
    
        },2000)
    
    });
  
}

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);


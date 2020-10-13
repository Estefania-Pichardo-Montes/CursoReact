//Importar y exportar archivos

// import { heroes } from './Data/Heroes';

import heroes, {owners} from '../Data/Heroes'

// console.log(owners);
// console.log(heroes);

export const getHeroeByID=(id)=> (heroes.find((heroe) => heroe.id===id)); 

// console.log(getHeroeByID(4));

//Find solo regresa uno, filter regresa una coleccion
export const getHeroesByOwner=(owner)=> (heroes.filter((heroe) => heroe.owner===owner)); 

// console.log(getHeroesByOwner('DC'));


//Funciones en javascript

//No se recomienda hacerlo de esta manera directa porque 
//Accidentalmente podramos sobreescribirlo
//Por ello es mejor asignar las funciones a una constante

const saludar=function(nombre){
    return `Hola, ${nombre}`;
}

//Si el cuerpo de la funcion tiene solo un renglon se puede 
//Simplificar
const saludar2= (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3=(nombre)=>`Hola, ${nombre}`;
const saludar4=()=>`Hola Mundo`;

console.log(saludar('Octavia'));
console.log(saludar2('Clarke'));
console.log(saludar3('Bellamy'));
console.log(saludar4());


const getUser=()=>{
    return{
        uid:'ABC123',
        username:'Bellarke_Endgame'
    }
}
const getUser2 = () => ({
    uid:'ABC123',
    username:'Bellarke_Endgame'
});

console.log(getUser());
const user2=getUser2();
console.log(user2);

//Tarea
//1.- Transformar a una funcion de flecha
//Retornar un objeto implicito
//Probarlo

function getUsuarioActivo(nombre){
    return{
        uid:'ABC567',
        username:nombre
    }
};

//Tarea resuelta :)
const usuarioActivo=getUsuarioActivo('Estefania');
console.log(usuarioActivo);

const  getUsuarioActivoTarea= (nombre)=>(
    {
        uid:'ABC567',
        username:nombre
    }
);

console.log(getUsuarioActivoTarea('Estefania'));




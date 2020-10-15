//Los componentes se escriben con el upper camelcase
//hay dos tipos de componentes, basados por clases o basados por funciones

//Se llaman funcional components
import React, { Fragment } from 'react';
import  PropTypes from 'prop-types';

//JavaScript solo puede regresar un objeto a la vez
//Tenemos que retornar los elementos HTML en un elemento que los contenga a todos
//Puedes utilizar un div para englobarlos o un fragment
//Si no le ponemos contenido a la etiqueta que engloba por default lo toma como un fragment

const PrimeraApp=({saludo, subtitulo})=>{

    //Los booleanos no los imprimira en pantalla

    return (
        <>
            <h1>{saludo}</h1>
            {/* Las llaves es para indicar lo que va a retornar de alguna cosntante */}
            {/* Para imprimir un objeto podemos utilizar el metodo Json.stringify */}
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <p>{subtitulo}</p>
        </>

    );

}

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired
}

PrimeraApp.defaultProps={
    subtitulo:'Soy un subtitulo'
}
export default PrimeraApp;


import React,{useState} from 'react';
import propTypes from 'prop-types';

const CounterApp=({value=5})=>{


    //El use state regresa un arreglo

    const [counter, setCounter]=useState(value); //Retorna un arreglo con 2 valores
    // const[counter, setCounter]=useState(value);

    const reset=(e)=>{
        setCounter(value);
    }

    const handleSubstract=()=>{
        setCounter(counter-1);
    }

    const handleAdd=(e)=>{
        // setCounter(counter+1);
        setCounter((c)=>c+1);
    }

    return(
        <>
            <h1>CounterApp</h1> 
            <h2>{counter}</h2>

            {/* Al evento on click podremos mandarle uan funcion */}
            <button onClick={handleAdd}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    )
}
CounterApp.propTypes={
    numero: propTypes.number
}

CounterApp.defaultProps={
    numero:0
}
export default CounterApp;
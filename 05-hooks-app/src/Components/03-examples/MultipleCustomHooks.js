import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {
    
    const {counter, increment} = useCounter(1);
    const {loading, data}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    // console.log(state);

    //Si existe la data, extrae la posicion 0 de la data
    const {author, quote}=!!data&&data[0];
    return (
        <div>
            <h1>Breaking bad Quotes</h1>
            <hr/>
            {
                loading?
                (
                    <div className="alert alert-info text-center">
                    Loading...
                </div>
                )
                :
                (
                    <blockquote className="blockquote text-right">
                    <p className="mb-0">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
    
                </blockquote>
                )
            }

            <button 
            onClick={increment}
            className="btn btn-primary" >
                Siguiente frase
            </button>

        </div>
    )
}

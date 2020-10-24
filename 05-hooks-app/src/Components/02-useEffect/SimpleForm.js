import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState(
        {
            name:'',
            email:''
        }
    )
    const {name, email}=formState;

    //Aqui el efecto solo se dispara una vez
    useEffect(()=>{
        // console.log('hey');
    }, []);

    //Aqui se disparara cada que algo del formulario cambie
    useEffect(()=>{
        // console.log('formStateCambio');
    }, [formState]);

    //Se disparara cada que el campo email cambie
    useEffect(()=>{
        // console.log('email cambio');
    }, [email]);
 

    const handleInputChange=({target})=>{
        
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input type="text"
                    name="name"
                    className="form-control"                
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input type="text"
                    name="email"
                    className="form-control"                
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name==='123') && <Message/>}
        </>
    )
}

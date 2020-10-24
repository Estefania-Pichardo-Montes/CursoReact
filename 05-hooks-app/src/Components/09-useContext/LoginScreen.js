import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    //1.- Obtener la referencia al userContext
    const {setUser} = useContext(UserContext);
    
    //2- SetUser

    return (
        <div>
        <h1>Login Screen</h1>
        <hr/>
        <button className="btn btn-primary"
        onClick={()=>setUser({
            id:123,
            name:'Estefania'
        })}
        >
            Login
        </button>
    </div>
    )
}

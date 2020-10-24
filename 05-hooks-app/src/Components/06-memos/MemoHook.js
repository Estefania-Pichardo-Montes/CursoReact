import React, { useMemo, useState } from 'react';

import {useCounter} from '../../Hooks/useCounter';
import { procesoPessado } from '../../Helpers/ProcesoPesado';

import '../02-useEffect/effects.css';

export const MemoHook = () => {
    
    const {counter, increment}=useCounter(10);

    const [show, setshow] = useState(true);


   const memoProcesoPesado = useMemo(() => procesoPessado(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter:<small>{counter}</small></h3>
            <hr/>
                <p>{ procesoPessado(counter)}</p>
            <button
            className="btn btn-primary"
            onClick={increment}>
                +1

            </button>
            <button 
            className="btn btn-outline-primary ml-3"
            onClick={()=>{
                setshow(!show);
            }
                
            }
            >
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
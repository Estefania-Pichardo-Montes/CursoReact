
const initialState=[{
    id:1,
    todo:'comprar pan',
    done:false
}];

const todoReducer=(state =initialState, action)=>{
    
    if(action?.type=='agregar'){

        return [...state, action.payload];
    }
    
    return state;
}

let todos=todoReducer();

const newToDo={
    id:2,
    todo:'comprar leche',
    done:false
}

const agregarToDoAction={
    type:'agregar',
    payload:newToDo //Recomendacion mandarlo en el payload   
}

todos=todoReducer(todos, agregarToDoAction);

console.log(todos);
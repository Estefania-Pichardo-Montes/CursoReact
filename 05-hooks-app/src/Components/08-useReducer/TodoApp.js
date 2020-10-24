import React, { useEffect, useReducer } from 'react'
// import { useForm } from '../../Hooks/useForm';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';


const init=()=>{

    return JSON.parse(localStorage.getItem('todos'))||[] ;

}

export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [],init);


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete=(todoId)=>{
        const action={
            type:'delete',
            payload:todoId
        }

        dispatch(action);

    }


    const handleToggle=(todoId)=>{
        dispatch({
            type:'toggle',
            payload:todoId
        });
    }

    const handleAddTodo=(newTodo)=>{
        dispatch({
            type:'add',
            payload: newTodo
        })
        
    }

    return (
        <div>
            <h1>ToDo App ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>

                <div className="col-5">
                   <TodoAdd 
                    handleAddTodo={handleAddTodo}
                   />
                </div>
            </div>


        </div>
    )
}

import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    //Sacar la referencia a la nota activa
    const {active:note} = useSelector(state => state.notes);
    //Usar mi custom hook
    const [formValues, handleInputChange, reset]=useForm(note);

    const {body, title, id}=formValues;

    //Almacenamos una variable mutable que no va a redibujar el componente si cambia
    const activeId=useRef(note.id);

    //Vamos a causar un efecto para redibujar el componente
    useEffect(() => {
       
        if(note.id!==activeId.current){
            reset(note);
            activeId.current=note.id
        }

    }, [note, reset]);

    useEffect(() => {

        //Esto se va a disparar cada que esto cambie
       dispatch(activeNote(formValues.id, {...formValues}));

    }, [formValues, dispatch]);

    const handleDelete=()=>{
        dispatch(startDeleting(id));
    }


    return (
        <div className="notes__main-content">
            
            <NotesAppBar/>

            <div className="notes__content">
                 <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                    name="title"
                 />

                    <textarea
                        placeholder="What happened today?"
                        className="notes__textarea"
                        value={body}
                        onChange={handleInputChange}
                        name="body"
                    >
                    </textarea>
                    {
                        (note.url)&&

                          <div className="notes__image">
                            <img src={note.url}
                                alt="imagen"
                            />
                         </div>
                    }
                  


            </div>

            <button className="btn btn-danger"
                onClick={handleDelete}
            >
                    Delete
            </button>
        </div>
    )
}

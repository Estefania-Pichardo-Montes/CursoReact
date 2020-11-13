import Swal from 'sweetalert2'
import { db } from "../firebase/firebase-Config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote=()=>{
    //El segundo argumento es una funcion oara obtener el state
    return async (dispatch, getState)=>{
        const uid=getState().auth.uid;
        
        const newNote={
            title:'',
            body:'',
            date: new Date().getTime()
        }

        const doc= await db.collection(`${uid}/journals/notes`).add(newNote);
       
        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id, newNote));

    }
}

export const activeNote=(id, note)=>({
    type: types.notesActive,
    payload:{
        id,
        ...note
    }
});

export const addNewNote=(id, note)=>({
    type:types.notesAddNew,
    payload:{
        id,
        ...note
    }
})

export const startLoadingNotes=(uid)=>{
    return async(dispatch)=>{
        const notes=await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes=(notes)=>({
    type:types.notesLoad,
    payload:notes
});

export const startSaveNote=(note)=>{

    return async(dispatch, getState)=>{
        const {uid}=getState().auth;

        if(!note.url){
            delete note.url;
        }

        const noteToFirestore={...note};
        delete noteToFirestore.id;

        await db.doc(`${uid}/journals/notes/${note.id}`).update(noteToFirestore);

        dispatch(refreshNote(note.id, note));
        Swal.fire('Saved', note.title, 'success');

    }
}

export const refreshNote=(id, note)=>({

    type:types.notesUpdated,
    payload:{
        id, 
        note
    }

});

export const startUploading=(file)=>{

    return async(dispatch, getState)=>{
        const {active:activeNote}=getState().notes;

        Swal.fire({
            title:'Uploading...',
            text:'Please wait...',
            allowOutsideClick:false,
            onBeforeOpen:()=>{
                Swal.showLoading();
            }
        });

        const fileUrl=await fileUpload(file);

        activeNote.url=fileUrl;

        dispatch(startSaveNote(activeNote));

        Swal.close();
    }
}

export const startDeleting=(id)=>{
    return async(dispatch, getstate)=>{
        const uid=getstate().auth.uid;
        await db.doc(`${uid}/journals/notes/${id}`).delete();

        dispatch(deleteNote(id));
    }
}

export const deleteNote=(id)=>({
    type:types.notesDelete,
    payload:id
});

export const noteLogout=()=>({
    type: types.notesLogoutCleaning
});

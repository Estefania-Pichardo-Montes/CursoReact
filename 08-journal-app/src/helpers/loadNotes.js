import { db } from "../firebase/firebase-Config"

export const loadNotes=async(uid)=>{
    const notesSnap= await db.collection(`${uid}/journals/notes`).get();

    const notes=[];

    notesSnap.forEach(snapHijo=>{
        notes.push({
            id:snapHijo.id,
            ...snapHijo.data()
        })
    });
    return notes;
}
import React from 'react'
import { useNotes, useNotesDispatch } from './contexts/NoteContext';

function NoteList(){

    const notes = useNotes();
    const dispatch = useNotesDispatch();
    return(
        <div className='noteList'>
            {notes.map((note)=>(
                <p key={note.id}>
                    {note.content}{" "}
                    <button onClick={()=> 
                        dispatch({ 
                            type: "delete",
                            id: note.id, })
                        }>刪除</button>
                
                
                </p>
            ))}

        </div>
    );
    
}
export default NoteList;


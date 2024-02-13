import React from 'react'

function NoteList({notes, onDelete}){

    return(
        <div className='noteList'>
            {notes.map((note)=>(
                <p key={note.id}>
                    {note.content}{" "}
                    <button onClick={()=>{onDelete(note.id)}}>刪除</button>
                
                
                </p>
            ))}

        </div>
    );
    
}
export default NoteList;


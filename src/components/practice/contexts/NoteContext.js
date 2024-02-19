import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);

//save dispatch Context
const NotesDispatchContext = createContext(null);

function notesReducer(notes, action)
{
    switch(action.type)
    {
        case "add":{
            console.log('Add : ' + action.id);
            return [
                ...notes,
                {
                    id: action.id,
                    content: action.noteContent,
                },
            ];
        }
        case "delete":{
            return notes.filter((nite) => nite.id != action.id)
        }
        default:{
            throw Error("沒有此action類型");
        }
    }
}

export function NotesProvider({children})
{
    const [notes, dispatch] = useReducer(notesReducer,[]);
    return <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
            {children}
        </NotesDispatchContext.Provider>
    </NotesContext.Provider>
}

export function useNotes(){
    return useContext(NotesContext);
}

export function useNotesDispatch(){
    return useContext(NotesDispatchContext);
}
import React,{useState, Suspense, lazy} from 'react'
import { useNotesDispatch ,useNotes} from './contexts/NoteContext';

//筆記目前數量ID
let noteId = 0;

//模擬懶加載的延遲
const delay = (ms) => new Promise((resolev)=>{setTimeout(resolev, ms);})
const App_Practice_Count = lazy(() => delay(1000).then(()=> import('./App_Practice_Count')));

export default function App_Practice_Notes() {
    const [noteContent, SetNoteContent] = useState('');
    const dispatch = useNotesDispatch();
    const notes = useNotes();

  return (
    <div>
          <input type='text' value={noteContent} onChange={(prevContent)=>  
            SetNoteContent(prevContent.target.value)} placeholder='輸入內容...'></input>
    <button onClick={()=>{
            dispatch({
                type: "add",
                id: noteId++,
                noteContent,
            })
            SetNoteContent('');
    }}>增加</button>
    <Suspense fallback={<div>故意延遲一秒鐘 測試懶加載...</div>}>
    <App_Practice_Count count={notes.length}/>
    </Suspense>
    </div>
  )
}
/*
 <Suspense fallback={<div>故意延遲一秒鐘 測試懶加載...</div>}>
    <App_Practice_Count count={notes.length}/>
    </Suspense>
*/
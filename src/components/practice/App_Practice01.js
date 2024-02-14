import React, { Suspense, lazy, useReducer, useState } from 'react'
import NoteList from './App_Practice_Note'

//註解改為懶加載
//import App_Practice_Count from './App_Practice_Count';

//模擬懶加載的延遲
const delay = (ms) => new Promise((resolev)=>{setTimeout(resolev, ms);})

const App_Practice_Count = lazy(() => delay(1000).then(()=> import('./App_Practice_Count')));

let noteId = 0;

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

export default function App_Practice01() {

    //元方法
  //const [notes , SetNote] = useState([]); 
  const [notes, dispatch] = useReducer(notesReducer,[]);

  const [noteContent, SetNoteContent] = useState('');
  function addNote(){
     //元方法
    // SetNote([
    //     ...notes,
    //     {
    //         id: noteId++,
    //         content: noteContent,
    //     },
    // ]);

    //改用Reducer
    dispatch({
        type: "add",
        id: noteId++,
        noteContent,
    })
    SetNoteContent('');
  }

  function handleNoteInput(e)
  {
    //下面方法就會確保是上一步的資料
    SetNoteContent((prevContent)=>{
        console.log(prevContent);
        return e.target.value;
    })

//就算SetNoteContent設定了noteContent 但這邊印出來還是上一步的或是上上一步不確定 react的異步
    //SetNoteContent(e.target.value)
    //console.log(noteContent);
  }

  function deleteNoteById(id){
console.log("刪除ID : "+id);
    //改用Reducer
    dispatch({
        type: "delete",
        id,
    });


      //元方法
    //SetNote(notes.filter((nite) => nite.id != id));
  }

  return (
   <main className='container'>
    <NoteList notes={notes} onDelete={deleteNoteById}/>
    <input type='text' value={noteContent} onChange={ e =>{handleNoteInput(e)}} placeholder='輸入內容...'></input>
    <button onClick={addNote}>增加</button>
    <Suspense fallback={<div>故意延遲一秒鐘 測試懶加載...</div>}>
    <App_Practice_Count count={notes.length}/>
    </Suspense>
    
   </main>
  )
}

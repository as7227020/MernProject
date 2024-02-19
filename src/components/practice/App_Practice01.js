import React, { Suspense, lazy, useReducer, useState } from 'react'
import NoteList from './App_Practice_Note'
import { NotesProvider } from './contexts/NoteContext';
import App_Practice_Notes from './App_Practice_Notes';

//註解改為懶加載
//import App_Practice_Count from './App_Practice_Count';









export default function App_Practice01() {
  return (
    <NotesProvider>
        <main className='container'>
            <NoteList/>
            <App_Practice_Notes/>
            <Suspense fallback={<div>故意延遲一秒鐘 測試懶加載...</div>}>
    </Suspense>
         </main>
    </NotesProvider>
  
  )
}

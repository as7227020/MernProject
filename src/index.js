import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './state/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

/*
  <AuthContextProvider>
    <App />
    </AuthContextProvider>
    APP就是AuthContext.js下方AuthContextProvider方法的{childen}
    所以App = childen
    這樣APP下的都可以使用Auth內設定的狀態
*/
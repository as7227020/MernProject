//import logo from './logo.svg';

import {HashRouter , BrowserRouter , Router, Route, Routes, Navigate} from 'react-router-dom'

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { useContext } from 'react';
import { AuthContext } from './state/AuthContext';



// <Home/>
function App() {
  const {user} = useContext(AuthContext);
  return(
    <HashRouter>
        
      <Routes>
        <Route path='/' element={user ? <Home/> : <Login/>}/>
        <Route path='/login' element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path='/profile/:username' element={<Profile　/>}/>
        <Route path='/register' element={user ? <Navigate to="/" /> : <Register/>}/>
      </Routes>
   
      </HashRouter>
  
  );
}

export default App;

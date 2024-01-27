import React,{useRef} from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from '@mui/material';

export default function Register() {
  const userName = useRef();
  const email = useRef();//用法:找下面的代碼 ref={email}
  const pws = useRef();
  const pwsConfirmation = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault();
   
    //密碼和確認密碼的確認
    if(pws.current.value !== pwsConfirmation.current.value)
    {
      pwsConfirmation.current.setCustomValidity("密碼錯誤");
    }else
    {
      try{
        const user = {
          username : userName.current.value,
          email : email.current.value,
          password : pws.current.value,
        };

        await axios.post("/NodeAPIFB/express/myapp/api/auth/register", user);
        navigate("/login");

      }catch(err)
      {
        console.log("註冊失敗");
      }
    }
  };


  return (
    <div className='Register'>
        <div className='RegisterWrapper'>
            <div className='loginLeft'> 
            <h3 className='loginLogo'>RedTea</h3>
            <span className='loginDesc'>本世紀最強的社群軟體! RedTea!</span>
            
            </div>
            <div className='loginRight'>
                <form className='loginBox' onSubmit={(e) => handleSubmit(e)}>
                    <p className='loginMsg'>帳號註冊</p>
                    <input type='text' className='loginInput' placeholder='名稱' required ref={userName}/>
                    <input type='email' className='loginInput' placeholder='信箱' register ref={email}/>
                    <input type='password' className='loginInput' placeholder='密碼' register minLength={3} ref={pws}/>
                    <input type='password' className='loginInput' placeholder='確認密碼' register minLength={3} ref={pwsConfirmation}/>
                    <button className='loginButton' type='submit'>註冊</button>
                 
                    <button className='loginRegisterButton' onClick={()=>{
                       navigate("/login");
                       window.alert("c8 c8 ");
                    }}>前往登入</button>
                   
                </form>
            </div>
        </div>
    </div>
  )
}

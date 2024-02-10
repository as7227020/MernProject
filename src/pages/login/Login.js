import React,{useContext, useRef} from 'react'
import './Login.css'
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const email = useRef();//用法:找下面的代碼 ref={email}
  const pws = useRef();
  const navigate = useNavigate();

  //AuthContextProvider內的參數
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleSubmit =(e)=>{
    e.preventDefault();
   
    loginCall(
      {
      email : email.current.value,
      password : pws.current.value,
    },
    dispatch
    );
  };

  console.log("目前使用者 : "+user);

  return (
    <div className='login'>
        <div className='loginWrapper'>
          
            <div className='loginLeft'>
              <h3 className='loginLogo'>RedTea</h3>
              <span className='loginDesc'>本世紀最強的社群軟體! RedTea!</span>
            </div>

            <div className='loginRight'>
              <div className='loginBox'>
              <form className='loginBox2' onSubmit={(e) => handleSubmit(e)}>
                    <p className='loginMsg'>登入</p>
                    <input type='email' 
                    className='loginInput' 
                    placeholder='信箱' 
                    required
                    ref={email}/>
                    <input 
                    type='password' 
                    className='loginInput' 
                    placeholder='密碼' 
                    required
                    minLength={3}
                    ref={pws}/>
                    <button className='loginButton'>登入</button>
                    <span className='loginForgot'>密碼忘記嗎?</span>
                   
                </form>
                <button className='loginRegisterButton' onClick={()=>{
                     navigate("/register");
                }}>註冊帳號</button>
              </div>
               
              
            </div>
        </div>
    </div>
  )
}

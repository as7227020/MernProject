import {createContext, useEffect, useReducer} from 'react'
import AuthReducer from './AuthReducer';
//最初使用者的狀態定義
const initialStse ={
    user : JSON.parse(localStorage.getItem("user")) || null,
    // user :{ 
    //     _id:"65acb7126b42a470d54f70b1",
    //     username:"username3",
    //     email:"email3@gmail.com",
    //     password:"password3",
    //     profilePicture:"",
    //     coverPicture:"",
    //     followers:[],
    //     followings:[],
    //     isAdmin:false,
    // },
    isFetching : false,
    error : false,
};

//global管理
export const AuthContext = createContext(initialStse);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer,initialStse);

    useEffect(()=>{
        console.log(state.user);
        localStorage.setItem("user",JSON.stringify(state.user));
    },[state.user]);





    //<AuthContext.Provider> react自己的createContext
    return (
        <AuthContext.Provider 
        value={{
            user : state.user,
            isFetching : state.isFetching,
            error : state.error,
            dispatch,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};
import axios from "axios";

//dispatch存在是因為要一直監視使用者的狀態 登入還是沒登入
export const loginCall = async (user,dispatch) =>{
    dispatch({ type: "LOGIN_START" });//登入按鈕 後就會跑這裡
    try{
        const response = await axios.post("/NodeAPIFB/express/myapp/api/auth/login", user);
        console.log("登入回傳 : ");
        console.log(response.data);
        dispatch({type: "LOGIN_SUCCESS", payload: response.data});
    }catch(err)
    {
        dispatch({type: "LOGIN_ERROR", payload: err});
    }
}
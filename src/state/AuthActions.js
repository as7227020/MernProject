//對應使用者輸入的動作的設定

export const LoginStart=(user)=>({
        type : "LOGIN_START",
    });

export const LoginSuccess=(user)=>({
        type : "LOGIN_SUCCESS",
        payload : user,
    });

export const LoginErrer=(error)=>({
        type : "LOGIN_ERROR",
        payload : error,
    });
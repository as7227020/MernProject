import React, { useEffect, useState } from 'react';
import './Quote01.css';

export default function Quote01() {

    const disappearTime = 3000;
const [isShow, SetisShow] = useState(true);

useEffect(()=>{
    setTimeout(() => {
        SetisShow(false);
    }, disappearTime);
},[]);

  return (
    <>
    {isShow && 
        <div className='quote'>提醒元件 - 請不要擔心, 我會顯示個{disappearTime/1000}秒鐘會自動消失!</div>
        
    }
    </>
  )
}

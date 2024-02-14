import React, { useEffect, useRef, useState } from 'react'
import './Title_Video.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';





export default function Title_Video() {
    const subContentStr = ['最休閒的去處','夏日最涼爽','山林烤肉'];
    const [playStrIndex, SetplayStrIndex] = useState(0);
    const subContentRef = useRef();

    const show01Str = useRef(null);
    const show02Str = useRef(null);
    const show03Str = useRef(null);
    
    let nodeRef = show01Str;
    let NowShowStr = subContentStr[playStrIndex];
    if(playStrIndex == 0)
    {
        nodeRef = show01Str;
    }
    if(playStrIndex == 1)
    {
        nodeRef = show02Str;
    }
    if(playStrIndex == 2)
    {
        nodeRef = show03Str;
    }

  /*
  
    useEffect(()=>{
       
        setTimeout(() => {
           
            SetplayStrIndex((playStrIndex)=> (playStrIndex+1));

            subContentRef.current.classList.add("subcontent");
            if(playStrIndex >= subContentStr.length-1)
            {
                SetplayStrIndex(0);
            }
         
        }, 4000);

        setTimeout(() => {
            subContentRef.current.classList.remove("subcontent");
            subContentRef.current.classList.remove("subcontentfirst");
        }, 2000);
    },[playStrIndex]);
  */

//     useEffect(()=>{
//         const id2 = setInterval(() => {
//             subContentRef.current.classList.remove("subcontent");
//             subContentRef.current.classList.remove("subcontentfirst");
//             console.log("移除更新嗎");
           
//         }, 2000);
        
//         const id = setInterval(() => {
          
//             SetplayStrIndex((prev)=> ((prev+1) >= subContentStr.length ? 0 :(prev+1)) );
//             subContentRef.current.classList.add("subcontent");
//             console.log("更新嗎");
           
//         }, 4000);
      

// return ()=>{
//     clearInterval(id);
//     clearInterval(id2);
//     //subContentRef.current.classList.remove("subcontentfirst");
// }

//     },[]);

useEffect(()=>{
    const id = setInterval(() => {
        SetplayStrIndex((prev)=> ((prev+1) >= subContentStr.length ? 0 :(prev+1)) );
    }, 3000);
    return ()=>{
    clearInterval(id);
}
},[])


  return (
    <div className='videoBG'>
        <div className='overlay'></div>
        <video src='testVideo2.mp4' autoPlay={true} loop muted />
      
        <div className='content'>
            <h1 className='titleContent'>
            <svg xmlns="http://www.w3.org/2000/svg" width=".5em" height=".5em" style={{marginRight:'10px',scale:'160%'}}><path fill="currentColor" d="M4.453.77a.753.753 0 0 1 1.06-.096c.76.634 1.056 1.383.893 2.121c-.14.63-.577 1.078-.918 1.316c-.214.183-.303.326-.34.416a.32.32 0 0 0-.022.202c.031.142.167.31.323.414a.753.753 0 1 1-.836 1.253c-.346-.23-.813-.69-.957-1.342c-.163-.739.132-1.487.893-2.121l.03-.026l.034-.022c.156-.104.291-.273.323-.415a.32.32 0 0 0-.023-.202c-.038-.092-.132-.244-.364-.437a.753.753 0 0 1-.096-1.06m4.67 2.008a.753.753 0 0 1-.097 1.06c-.232.194-.326.345-.364.438a.32.32 0 0 0-.023.202c.032.142.167.31.323.414a.753.753 0 1 1-.835 1.253c-.347-.23-.814-.69-.958-1.342c-.163-.739.132-1.487.893-2.121a.753.753 0 0 1 1.06.096M.207 7.595a.753.753 0 0 1 .73-.57h11.558a.75.75 0 0 1 .73.57c.11.435.137.99.078 1.612h1.843c.416 0 .753.338.753.753c0 .74-.045 1.936-.797 2.938c-.74.988-2.03 1.622-4.093 1.69c-.27.338-.566.672-.892.999a.753.753 0 0 1-.533.22H3.85c-.2 0-.391-.08-.532-.22c-1.45-1.45-2.317-3.05-2.78-4.472C.084 9.717 0 8.425.208 7.595m9.06 6.707c.281-.3.536-.604.764-.91c.933-1.251 1.438-2.534 1.659-3.586c.105-.503.142-.936.137-1.276H1.606c-.008.526.085 1.263.363 2.12a9.755 9.755 0 0 0 2.198 3.652zm2.826-1.338c1.003-.195 1.52-.59 1.805-.97c.28-.373.405-.818.459-1.28h-1.34a10.61 10.61 0 0 1-.925 2.25"></path></svg>
           樹鷗遊樂園區</h1>


            <SwitchTransition >
                <CSSTransition
                key={playStrIndex}
                nodeRef={nodeRef}
                classNames='fade'
                addEndListener={(done)=>{
                    nodeRef.current.addEventListener("transitionend",done , false);
                }}
                mountOnEnter
                unmountOnExit
                >
                <p ref={nodeRef} style={{}}>{NowShowStr}</p>
                </CSSTransition>
            </SwitchTransition>
            
         
        </div>
        <button className='contentbtn' onClick={()=> window.open("https://www.pexels.com/zh-tw/videos/", "_blank")}>
            影片素材來源
        </button>
    </div>
  )
}

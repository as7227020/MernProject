import React,{useEffect , useRef} from 'react'
import './GraduallyShow.css'
/*
逐漸顯示
obj = 物件
isReset = 是否會重製(再回來時就在顯示一次)
*/

export function GraduallyShow({obj,isReset = false}){
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if(ref.current != null && ref.current.classList != null)
        {
          if (entry.isIntersecting) {
            ref.current.classList.add("text-focus-in");
            // 元件可見
          } else {
            // 元件不可見
            if(isReset)
            {
                ref.current.classList.remove("text-focus-in");
            }
          }

        }
      
      });
  
      observer.observe(ref.current);
  
      return () => observer.disconnect();
    }, []);
  
    return <div ref={ref} >{obj}</div>;
  };
  
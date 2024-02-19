import React,{useEffect , useRef} from 'react'
import './GraduallyShow.css'

function GetCustomStyle(Props) {
  return  {
    '--my-delay-style': `${Props.delay}s`,
    '--my-playSpeed-style': `${Props.playSpeed}s`,
    '--my-showDistanceX-style': `${Props.distanceX}px`,
    '--my-showDistanceY-style': `${Props.distanceY}px`,
  };
}


/*
逐漸顯示
obj = 物件
isReset = 是否會重置(再回來時就在顯示一次)
delay = 延遲幾秒顯示
distance = 到顯示目標的位置得移動距離長度

用法: import GraduallyShow 後
  <GraduallyShow  delay={3.5} playSpeed={1.5} distanceX={0} distanceY={0} obj={
          物件
           }/>


*/
export function GraduallyShow({obj, isReset=false, delay=0, playSpeed=1, distanceX=0, distanceY=0}){


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
    
    return <div ref={ref} style={GetCustomStyle({delay,playSpeed,distanceX,distanceY})}>{obj}</div>;
  };
  
import { useEffect, useRef, useState } from "react";

//textToType = 要打的全文字
//interKeyStrokeDurationInMs = 打的速度
//isDisappear = 打完後是否要消失
export function useTypingEffect(textToType, interKeyStrokeDurationInMs, isDisappear) {
  const [currentPosition, setCurrentPosition] = useState(0);//設定為0 = 目前打的字的長度
  const currentPositionRef = useRef(0);//根據上方數量打一次後隨之增加 並檢查是否打完了的長度

  //清除並重置
  const ClearAndReSet = (intervalId,isDisappear)=>{
    clearInterval(intervalId);

    if(isDisappear)
    {
        currentPositionRef.current = 0;
        setCurrentPosition(0);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      //設定目前字串長度 以目前的字串長度在+1
      setCurrentPosition((value) => value + 1);
      
      //檢查隨之累積
      currentPositionRef.current += 1;
      
      //檢查是否已到長度  
      if (currentPositionRef.current > textToType.length) {
        ClearAndReSet(intervalId,isDisappear);//清除並重置
      }
    }, interKeyStrokeDurationInMs);

    return () => {
        ClearAndReSet(intervalId,isDisappear);//清除並重置
    };

  }, [interKeyStrokeDurationInMs, textToType]);

  //返回目前打的長度內字串
  return textToType.substring(0, currentPosition);
}
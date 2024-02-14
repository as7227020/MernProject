import React, { useCallback, useEffect, useState } from 'react'

//import svgTest from '../../svgTest.svg'; //可把svg轉為React的組件用
import { ReactComponent as LOGO } from '../../svgTest.svg';



function getWeather(city){
    if(city == '高雄') return 20;
    if(city == '台南') return 21;
    if(city == '嚬東') return 22;
}//上方優化 只有當city改變時才會觸發

export default function App_Practice_useCallBack() {


    const [dateTime, SetDateTime] = useState(new Date());

    useEffect(()=>{
        const id = setInterval(() => {
            SetDateTime(new Date());
            console.log("dateTime setInterval的更新 ID : " + id);
        }, 1000);
        console.log("dateTime 建立setInterval ID : " + id);
        return ()=>{
            clearInterval(id);
            console.log("dateTime 移除setInterval ID : " + id);
        }
    },[]);


    const [city, SetCity] = useState('高雄');
    const [weather, SetWeather] = useState(20);

    //因為上面時間把dateTime改變了 會對下面的方法都會再跑一下 所以溫度的useEffect也會執行 要使用callBack來優化
    // function getWeather(){
    //     if(city == '高雄') return 20;
    //     if(city == '台南') return 21;
    //     if(city == '嚬東') return 22;
    // }

    //在更優化把這段換成純方法 移至最上方
    // const getWeather = useCallback(()=>{
    //     if(city == '高雄') return 20;
    //     if(city == '台南') return 21;
    //     if(city == '嚬東') return 22;
    // },[city]);//上方優化 只有當city改變時才會觸發

    //更優化方法 用下面的
    // useEffect(()=>{
    //     console.log("getWeather的useEffect執行");
    //     SetWeather(getWeather());
    // },[getWeather])

    //移除選擇城市後改變溫度的useEffect 改為監聽 效能再好點 不要太濫用useEffect
    // useEffect(()=>{
    //     console.log("getWeather的useEffect執行");
    //     SetWeather(getWeather(city));
    // },[city])

    function handleCityChange(e){
        const newCity = e.target.value;
        SetCity(newCity);
        SetWeather(getWeather(newCity));
    }

  return (
    <>
    <div>時間 : {dateTime.toLocaleString()}</div>
    <div>
        <p>{city} 天氣 : {weather}</p>
    </div>
    <label htmlFor='weather'>溫度:</label>
    {/*<select id='weather' onChange={e => SetCity(e.target.value)}> 移除useEffect的優化 改監聽效能好點*/}
    <select id='weather' onChange={e => handleCityChange(e)}>
        <option value='高雄'>高雄</option>
        <option value='台南'>台南</option>
        <option value='嚬東'>嚬東</option>
    </select>

    <div>
        {/*<img src={svgTest} width={50}></img> 把svg檔案轉成React組件用 因為img無法改顏色*/}
        <LOGO width={100} height={100} fill="#FF0000"/>
    </div>
  
    </>
  )
}

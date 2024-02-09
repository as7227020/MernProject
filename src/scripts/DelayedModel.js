import styled, { keyframes } from "styled-components";
import React,{useEffect, useState} from "react";

const Appear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const myBox = styled.div`
    margin: 5px;
    position: relative;
    height: 20rem;
    width: 20rem;
    background-color: ${({color}) => color};
    border-radius: 100px;
    text-align: center;
    color: white;
    
    animation-name: ${Appear};
    animation-duration: 1.5s;
`;

const DelayComp = ({time = 0, color}) =>{
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setTimeout(() => 
            setMounted(true), time);
    });

    return (
        mounted && (
            <myBox color={color}>
                <p>fffffff 顯示{color}色 秒數{time} </p>
            </myBox>
        )
    );
};

export default DelayComp;
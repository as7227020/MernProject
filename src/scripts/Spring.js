

//記數用
import { useSpring, animated } from 'react-spring';



export function  CounterNumber({toNumber}){
    const {number} = useSpring({
      from: {number: 0},
      number: toNumber,
      delay: 100,
      config:{mass: 1 , tension: 20 , friction: 30},
    });
    
    return <animated.div>{ number.to( (toNumber) => toNumber.toFixed(0) )}</animated.div>;
  
  }


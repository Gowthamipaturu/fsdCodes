import React from 'react'
import { useState } from 'react'
// for dom manipulation 

const Count = () => {
    const[count, setCount]=useState(0)
    // const[bgColor, setBgColor]=useState("green")
    const [isChangeColor, setIsChangeColor]=useState(!true)
    // let count=0;
    const incrementHandler=()=>{
        setCount(count+1);
    }
    const incrementBy2=()=>{
        setCount(count+2);
    }
    const decrementHandler=()=>{
        setCount(count-1);
    }
    const decrementBy2=()=>{
        setCount(count-2);
    }
    const multiplicationHandler=()=>{
        setCount(count*2);
    }
    const divisionHandler=()=>{
        setCount(count%2);
    }
    // const colorChangeHandler=()=>{
        // setBgColor("green");
    // }
    const colorChangeHandler=()=>{
        setIsChangeColor(!(false));
    }
    console.log(count); 
  return (
    <>
        <button onClick={decrementBy2}>-2</button>
        <button onClick={decrementHandler}>-</button>
        {/* <span style={{backgroundColor:"blue"}}>{count}</span> */}
        <span style={{backgroundColor:isChangeColor?"blue":"green"}}>{count}</span>
        <button onClick={incrementHandler}>+</button>
        <button onClick={incrementBy2}>+2</button>
        <button onClick={multiplicationHandler}>*2</button>
        <button onClick={divisionHandler}>%2</button>

        {/* <button onClick={colorChangeHandler}>GreenColor</button> */}
        <button onClick={colorChangeHandler}>Color Change</button>
    </>
  )
}

export default Count
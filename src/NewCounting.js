import React from 'react'
import { useState } from "react"
export default function NewCounting() {

      
    const[count,setCount]=useState(0);

    const increment= () => {
        setCount(count + 1);
    };
    
    const decrement= () => {
        setCount(count - 1);
    };
    
    const reset= () => {
        setCount(0);
    };   


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>add</button>
        <button onClick={decrement}>sub</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

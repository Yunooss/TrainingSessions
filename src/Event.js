import React from 'react'
import { useState } from 'react'

export default function Event() {
    
    const[inputvalue,SetInputValue]=useState("");
    const[displayMessage,setDisplayMessage] = useState("Your result appears here ");

    const handleChange=(event) => {
        SetInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplayMessage(`you submitted: ${inputvalue}`);
    };
    
  return (
    <div>
        <p>{displayMessage}</p>

        <form onSubmit={handleSubmit}>
            <label>type:</label>
            <input type='text' value={inputvalue} onChange={handleChange}/>
            <button>submit</button>
        </form>
    </div>
  )
}


import React, { useState } from 'react';

function HookCounterTwo() {
    const initialCount = 0;
    const [ count, setCount ] = useState(initialCount)

      
    const increment5right = () => {
        for(let i=0;i <5; i++){
            setCount((prevCount) => prevCount + 1);
        }
    }
    const increment5wrong = () => {
        for(let i=0;i <5; i++){
            setCount(count + 1);
        }
    }


    return(
        <div>
            count: {count}
            <button onClick={() => setCount(initialCount)}> reset </button>
            <button onClick={() => setCount(count + 1) }>Increment</button>
            <button  onClick={() => setCount(count - 1) }>decrement</button>
            <button  onClick={increment5right}>Increment 5</button>
            <button  onClick={increment5wrong}>Increment 5*</button>
        </div>
    ) 
}

export default HookCounterTwo;
import React, {useState, useEffect} from 'react';

function HookCounterOne() {

    const [count,setCount] = useState(0)
    const [name,setName] = useState(0)

    function incCount()  {
        setCount(count + 1)
    }

    useEffect(() => {
        console.log('useEffect - title')
        document.title = `clicked ${count} times`
    },[count])//tell props and state in array [] 
    

    return (
        <div>
            <input type="text" value={ name } onChange={e => setName(e.target.value)} />
            <button onClick={incCount}>
                Click {count} times
            </button>
        </div>
    )

}

export default HookCounterOne;
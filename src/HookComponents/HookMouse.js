import React, { useState, useEffect } from 'react';

function HookMouse(){
    const [x, changex] = useState(0)
    const [y, changey] = useState(0)

    const logMousePos = (e) => {
        console.log('event')
        changex(e.clientX)
        changey(e.clientY)
    }

    //called on only initial render
    //**********does not get called on re-renders */
    useEffect(() => {
        console.log('useeffect called')
        window.addEventListener('mousemove', logMousePos)

        //clenup/ componentwill unmount
        return () => {
        console.log('unmounting')
        window.removeEventListener('mousemove', logMousePos)
        }

    },[]) // does not depend on any prop or state


    return(
        <div>
            <h1>x:{x} y:{y}</h1>
        </div>
    )

}

export default HookMouse;
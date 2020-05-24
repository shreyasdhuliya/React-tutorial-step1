import React from 'react';

const FunctionClick = () => {
    const alertmessage = () => {
        alert();
    }

    return (
        <button onClick={alertmessage}>click</button>
    );
}

export default FunctionClick;
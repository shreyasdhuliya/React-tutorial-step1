import React from 'react';

const ChildEx1_1 = (props) => {
    return(
        <button onClick= {() =>props.clicked('child')} >Child cLick</button>
        //<button onClick= {props.clicked} >Child cLick</button>
    );
}

export default ChildEx1_1;
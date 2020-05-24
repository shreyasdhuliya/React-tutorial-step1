import React from 'react';

function MemoComp({name}){
    console.log('REndering memo');
    return(
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp);
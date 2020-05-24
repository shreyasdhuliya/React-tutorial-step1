import React from 'react';
import ReactFragment from './ReactFragments';

function Columns(){
    return(
        <React.Fragment>
            <td>hello</td>
            <td>sir</td>
        </React.Fragment>

        /*<ReactFragment>
            {
                items.map( item => (
                       <React.Fragment key={item.id}>
                           <p>{item.title}</p>
                       </React.Fragment>            
                    
                    ) )
            }
        </ReactFragment>*/
    )
};

export default Columns;
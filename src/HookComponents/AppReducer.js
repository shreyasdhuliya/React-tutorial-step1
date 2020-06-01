import React, { useReducer } from 'react';

import ComponentA from '../HookComponents/ComponentsAF/ComponentA';
import ComponentB from '../HookComponents/ComponentsAF/ComponentB';
import ComponentC from '../HookComponents/ComponentsAF/ComponentC';

export const CountContext = React.createContext()

const initialState = 0
    const reducer = (state, action) => {
    
    switch(action){
        case 'increment':
         return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }    
}


function AppReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);

      return(
          <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
            Count = {count }
            <ComponentA />
            <ComponentB />
            <ComponentC />
        </div>
        </CountContext.Provider>
        
    )
};


export default AppReducer;
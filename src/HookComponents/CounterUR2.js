import React, { useReducer } from 'react';

const initialState = {
    firstCounter:0,
    secondCounter: 10

}
const reducer = (state, action) => {
    
    switch(action.type){
        case 'increment2':
         return {...state ,secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state ,secondCounter: state.secondCounter - action.value}
        case 'increment':
         return {...state ,firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state ,firstCounter: state.firstCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }    
}

function CounterUR2(){

   const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <div>
            <div>count = {count.firstCounter}</div>
            <div>second count = {count.secondCounter}</div>
            <button onClick={() => dispatch({type:'increment', value: 1})}>Increment </button>
            <button onClick={() => dispatch({type:'decrement',value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type:'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement',value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type:'reset',value: 1})}>Reset</button>
            <div><button onClick={() => dispatch({type:'increment2', value: 1})}>Increment2 </button>
            <button onClick={() => dispatch({type:'decrement2',value: 1})}>Decrement2</button></div>
        </div>
    )
};

export default CounterUR2;
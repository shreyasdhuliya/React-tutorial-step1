import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    loading:true,
    error:'',
    post: {}
}

const reducer = (state,action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                error:'',
                post: action.payload
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: "something went wrong"
            }

        default: 
            return state
    }
}


function DataFetchingTwo() {
  const [state, dispatch] =  useReducer(reducer, initialState)

    return (
        <div>

        </div>
    )
};

export default DataFetchingTwo;
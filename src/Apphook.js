import React from 'react';

//only call hooks on the top level
//don't call inside loops, consitions, or nested functions

//Only call hooks from react functions
//callthem from within react functional components and not just any regular javascriptfunction

//example1 useState
import HookCounter from './HookComponents/HookCounter';
import HookCounterTwo from './HookComponents/HookCounterTwo';
import HookCounterThree from './HookComponents/HookCounterThree';
import HookCounterFour from './HookComponents/HookCounterFour';

//example 2 useEffect, comparing with class counter
// usefffect after render, 
import ClassCounterOne from './HookContainers/ClassCounterOne';
import HookCounterOne from './HookComponents/HookCounterOne';
//conditional render [count], run once on initial render [] **componentdidmount/update()**
import ClassMouse from './HookContainers/ClassMouse';
import HookMouse from './HookComponents/HookMouse';
//useeffect with cleanup, **componentwillunmount() **
import MouseContainer from './HookComponents/MouseContainer';

//exapmle 3 fetching data with useEffect
import DataFetching from './HookComponents/DataFetching';

//example 4 useContext


//example 6 Usereducer(state,action), simple state and action
import CounterUR from './HookComponents/CounterUR';
import CounterUR2 from './HookComponents/CounterUR2';
import CounterUR3 from './HookComponents/CounterUR3';

//example 7 use reducer with usecontext
import AppReducer from './HookComponents/AppReducer';

//example 8 fetching, error and loading
import DataFetchingOne from './HookComponents/DataFetchingOne';
import DataFetchingTwo from './HookComponents/DataFetchingTwo';

function Apphook(){
    return (
        <div>
        
            {/*<HookCounter />
            <HookCounterTwo />
            <HookCounterThree />
            <HookCounterFour />*/}

           {/*<ClassCounterOne /> */}
            {/*<HookCounterOne />*/}

            {/*<ClassMouse />
            <HookMouse />*/}

            {/*<MouseContainer />*/}

            {/*<DataFetching />*/}

            {/*<CounterUR />*/}
            {/*<CounterUR2 />*/}
            {/*<CounterUR3/>*/}

            {/*<AppReducer /> */}

            {/*<DataFetchingOne /> */}
            <DataFetchingTwo />

        </div>
    )
};


export default Apphook;
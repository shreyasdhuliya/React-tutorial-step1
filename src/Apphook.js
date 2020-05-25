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

            <DataFetching />
        </div>
    )
};


export default Apphook;
import React, { Component } from 'react';

import {Hello,HelloArrow,HelloArrow2,HelloJSX} from './components/Hello';
import Welcome from './containers/Welcome';

//example 2 props
import Person from './containers/Person';
import Person2 from './components/Person2';

//expamle 3 state set state
import {Message, Message2} from './containers/Message';

//exapmle 4 setState(prevstate,props), callbacks and prevstate
import {Counter1, Counter2,Counter3, Counter4} from './containers/Counter'; 

//example 5 destructuring
import {HeroName, HeroName2}  from './components/HeroName';
import HeroName3  from './containers/HeroName2';

//example 6 event handling and binding event handlers
import FunctionClick from './components/FunctionClick';
import FunctionClick2 from './containers/FunctionClick2';
import {EventBinding, EventBinding2, EventBinding3, EventBinding4} from './containers/EventBinding';
import {ConditionalRendering,ConditionalRendering2,ConditionalRendering3, ConditionalRendering4} from './containers/ConditionalRendering';

//example 7 methods as props from child
import ParentEx1 from './containers/ParentEx1';

//example 8 List Rendering
import {ListRendering, ListRendering2, ListRendering3, ListRendering4} from './components/ListRendering';

//example 9 forms basic
import {Form} from './containers/Forms';

//example 10 Mounting lifecycle
import {MountingLifeCyle} from './containers/MountingLifeCycle';

//example 11 Reacr Fragments
import ReactFragments from './components/ReactFragments';

//Example 12 pure component
import ParentComponent from './containers/ParentComponent';

//Example 13 Memos and refs/forwarding refs
import RefsDemo from './containers/RefsDemo';
import FocusInput from './components/FocusInput';

//Example  14 Portal Demo
import PortalDEmo from './components/PortalDemo';

//Expamle 15 Higher order Components
//Example 16 REnder Props <------------------ imp video 37 codeevlotion
//sharing code between React comps using prop whose value is a function
import {ClickCounter1,HoverCounter1} from './containers/ClickCounter';

//Example 17 Context
import ComponentA from './containers/ComponentA';
import { UserProvider } from './containers/UserContainer';

//Example 18 HTTP example using jsonplaceholder
import PostList from './containers/PostList';

function App() {
  return (
    <div >
        {/*<Hello />
        <HelloArrow />
        <HelloArrow2 />
        <HelloJSX />*/}
        
        {/*<Welcome /> */}

        {/*<Person name="shreyas"/>
        <Person2 name="shreyas"/>*/}

        
        {/*<Message />
        <Message2 />*/}

        {/*<Counter1/>   
        <Counter2/>    
        <Counter3/>  
        <Counter4 addVal = "5" /> */}

        {/*
        <HeroName name="Shreyas" heroName="batman" />
        <HeroName2 name="Shreyas" heroName="batman" />
        <HeroName3 name="Shreyas" heroName="batman" />
        */}

        {/*<FunctionClick />
        <FunctionClick2 />
        <EventBinding />
        <EventBinding2 />
        <EventBinding3 />
        <EventBinding4 />*/}

        {/*<ParentEx1 /> */}

        {/*<ConditionalRendering />
        <ConditionalRendering2 />
        <ConditionalRendering3 />
        <ConditionalRendering4 />*/}

        {/*<ListRendering/>
        <ListRendering2/>
        <ListRendering3/>
        <ListRendering4/>*/}

        {/*<Form />*/}

        {/*<MountingLifeCyle />*/}
        
        {/*<ReactFragments />*/}

        {/*<ParentComponent /> */}

        {/*< RefsDemo />
        <FocusInput  />*/}

        {/*<PortalDEmo />*/}

        {/*<ClickCounter1 name="shreyas" />
        <HoverCounter1 render= {(isLoggedIn) => isLoggedIn ? 'shreyas': 'guest'}/>*/}

        {/*<UserProvider value="Shreyas">
            <ComponentA />
        </UserProvider>*}
        {/* defalult value in context */}
            {/*<ComponentA />*/}
        
        {/*<PostList />*/}

    </div>
  );
}

export default App;

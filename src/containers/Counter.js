import React, { Component } from 'react';


//example of using callback funcction in set state
class Counter1 extends Component {
    state= {count: 0};

    increment() {
        this.setState(
            {
                count: this.state.count  + 1
            },
            () => {console.log("calbback" , this.state.count)}
            )
            console.log(this.state.count);
    }

    render(){
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button type="button" onClick= {() => this.increment()}> Increment</button>
            </div>
        );
    }
}

class Counter2 extends Component {
    state= {count: 0};

    increment() {
        this.setState(
            {
                count: this.state.count  + 1
            },
            () => {console.log("calbback" , this.state.count)}
            )
            console.log(this.state.count);
    }

    increment5() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment(); 
    }

    render(){
        return (
            <div>
                <h1>Count :{this.state.count}  check console,this is wrong, use prevstate see next counter</h1>
                <button type="button" onClick= {() => this.increment5()}> Increment 5</button>
            </div>
        );
    }
    
}

//explame of using prevsious statye
class Counter3 extends Component {
    state= {count: 0};

    increment() {
        this.setState(prevstate =>
            ({ count: prevstate.count + 1}))
            console.log(this.state.count)
    }

    increment5() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment(); 
    }

    render(){
        return (
            <div>
                <h1>Count :{this.state.count}  </h1>
                <button type="button" onClick= {() => this.increment5()}> Increment 5</button>
            </div>
        );
    }
}


//example of using setState(prevstate,props)
class Counter4 extends Component {
    state= {count: 0};

    increment() {
        this.setState((prevstate,props) =>
            ({ count: prevstate.count + props.addVal}))
            console.log(this.state.count)
    }

       render(){
        return (
            <div>
                <h1>Count :{this.state.count}  </h1>
                <button type="button" onClick= {() => this.increment()}> Increment 5</button>
            </div>
        );
    }
}

export {Counter1, Counter2, Counter3, Counter4};
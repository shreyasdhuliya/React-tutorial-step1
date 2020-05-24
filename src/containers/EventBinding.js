import React, {Component} from 'react';

//expample with binder
class EventBinding extends Component {
    state = {message:"hello"}

    changeState = () => {
        this.setState({message: "bye"})
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeState.bind(this)}>CLick</button>
            </div>
        );
    }
}

//example without binder
class EventBinding2 extends Component {
    constructor(props){
        super(props);
    this.state = {message:"hello"}
   
    }
    changeState = () => {
        this.setState({message: "bye"})
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeState}>CLick</button>
            </div>
        );
    }
}

//example without binder
class EventBinding3 extends Component {
    constructor(props){
        super(props);
    this.state = {message:"hello"}
    //this is important now
    this.changeState = this.changeState.bind(this);
    }
    changeState()  {
        this.setState({message: "bye"})
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeState}>CLick</button>
            </div>
        );
    }
}

//example without binder
class EventBinding4 extends Component {
    constructor(props){
        super(props);
    this.state = {message:"hello"}
    }
    changeState()  {
        this.setState({message: "bye"})
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>CLick</button>
            </div>
        );
    }
}

export {EventBinding, EventBinding2,EventBinding3, EventBinding4 };
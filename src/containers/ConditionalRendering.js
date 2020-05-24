import React, {Component} from 'react';

class ConditionalRendering extends Component {
    state = {
        loggedin: true
    }

    render() {
        if(this.state.loggedin){
            return(<h1> HEllo Shreyas </h1>) 
        }
        else 
            return (<h1>Hello guest</h1>)
    }       

};

class ConditionalRendering2 extends Component {
    state = {
        loggedin: true
    }

    render() {
        var message;
        if(this.state.loggedin){
            message = <div>hello shreyas</div>
        }
        else {
            message = <div>hello guest</div>
        }
        
       
        return(
          <div>{message}</div> 
        );
    }       
}


class ConditionalRendering3 extends Component {
    state = {
        loggedin: false
    }

    render() {
                      
        return(
            this.state.loggedin ?
          <div>Hello Shreyass</div> : 
          <div>Hello Guest</div>
        );
    }       
}


class ConditionalRendering4 extends Component {
    state = {
        loggedin: false
    }

    render() {     
        return this.state.loggedin && <div>Hello Shreyas</div>;
    }       
}


export  {ConditionalRendering, ConditionalRendering2,ConditionalRendering3, ConditionalRendering4};

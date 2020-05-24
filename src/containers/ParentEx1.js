import React, { Component } from 'react';
import ChildEx1_1 from '../components/ChildEx1_1';

class ParentEx1 extends Component {

    /*
    constructor(props){
        super(props);
        this.state ={parent1:"parent"}
        this.greetParent = this.greetParent.bind(this);
    }
    */

    state = {
        parent1: "parent"  
}

    greetParent = (child) =>{
        alert(`hello ${this.state.parent1} from ${child}`);
    }

    /*greetParent() =>{
        alert(`hello ${this.state.parent1}`);
    }*/

    render() {
        return(
            <div >
                 <ChildEx1_1 clicked= {this.greetParent} />
            </div>
        );
    }
}
export default ParentEx1;
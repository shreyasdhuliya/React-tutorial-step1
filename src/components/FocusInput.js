import React, { Component } from 'react';
import Input from '../containers/input';
import FRInput from './FRInput';

class FocusInput extends Component {
    constructor(props){
        super(props)
        this.compRef = React.createRef()
        //forward ref
        this.frcompRef = React.createRef()
    }

    clickHandler = () => {
        //focusInput defined in child Input component
        this.compRef.current.focusInput()
    }

    // forward ref
    clickHandler2 = () => {
        //focusInput defined in child Input component
        this.frcompRef.current.focus()
    }

    render(){
        return (
            <div>
                <div>
                    focus in child component using refs
                    <Input  ref={this.compRef}/>
                    <button onClick= {this.clickHandler}>Focus</button>
                </div>
                <div>
                    focus in child comp using forward ref 
                    <FRInput  ref={this.frcompRef}/>
                    <button onClick= {this.clickHandler2}>Focus</button>
                </div>
            </div>
        )
    }
};

export default FocusInput;
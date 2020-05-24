import React, {Component} from 'react';

import {MountingLifeCyle2} from './MountingLifeCycle2';

class MountingLifeCyle extends Component {
constructor(props){
    super(props)

    this.state = {name: 'Shreyas'};
    console.log('LifeCycle constructor A')
}

    static getDerivedStateFromProps(props, state) {
        console.log('getderivedstatefromprops A');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount A');
    }

    shouldComponentUpdate(){
        console.log('shoudl component update A')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getsnapshot before update A');
        return null;
    }

    componentDidUpdate(){
        console.log('component did update A')
    }

    changeState = () => {
        this.setState ({name: 'Shreyaa'});
    }

    render(){
        
        console.log('render A');
        return (
        <div>
           {this.state.name}
        <MountingLifeCyle2 />
        <button onClick={this.changeState}>click</button>
        </div>
        );
    }

}

export {MountingLifeCyle};
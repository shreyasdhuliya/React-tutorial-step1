import React, {Component} from 'react';

class MountingLifeCyle2 extends Component {
constructor(props){
    super(props)

    this.state = {name: 'Shreyas'};
    console.log('LifeCycle constructor B')
}

    static getDerivedStateFromProps(props, state) {
        console.log('getderivedstatefromprops B');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount b');
    }

    shouldComponentUpdate(){
        console.log('shoudl component update b')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getsnapshot before update b');
        return null;
    }

    componentDidUpdate(){
        console.log('component did update b')
    }

    render(){
        
        console.log('render B');
        return (
        <div>
            {this.state.name}
        </div>
        );
    }

}

export {MountingLifeCyle2};
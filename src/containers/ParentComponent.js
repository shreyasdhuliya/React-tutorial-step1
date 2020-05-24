import React, {Component, PureComponent} from 'react';

import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from '../components/MemoComp';

//class ParentComponent extends PureComponent{
class ParentComponent extends Component{

    state = {name:"shreyas"};

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "shashwat"
            })
        }, 2000)
    }

    render(){
        console.log('parent');
        return (
            <div>
                Parent Component/ check console log
                {/*<RegComp name={this.state.name} />
                <PureComp name={this.state.name} />*/}
                <MemoComp name={this.state.name} />
            </div>
        );
    }
};

export default ParentComponent;
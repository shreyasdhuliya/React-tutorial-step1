import React, { Component } from 'react'

import UpdatedComponent from './HOCounter'


class ClickCounter extends Component {
    
    render(){
        const { count, incrementCount } = this.props
        return(
            <div>
                <button onClick={incrementCount}> Clicked {count} Times</button>
               Clicked {count} times by {this.props.name}
            </div>
        )
    }
};

class HoverCounter extends Component {
    
    render(){
        const { count, incrementCount } = this.props
        return(
            <div>
                <h1 onMouseOver={incrementCount}> Clicked {count} Times</h1>
                 Clicked {count} times by {this.props.render(false)}
            </div>
        )
    }
};

const ClickCounter1 = UpdatedComponent(ClickCounter, 5);
const HoverCounter1 = UpdatedComponent(HoverCounter, 10);



export {ClickCounter1,HoverCounter1 }

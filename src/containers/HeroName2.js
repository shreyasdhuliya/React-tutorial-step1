import React, {Component} from 'react';

class Heroname3 extends Component {
    state= { name: ["shreyas",  "batman"]};
    render(){
        const {name, heroName} = this.props;
        const {state1, state2} = this.state.name;
        return(
            <div>
                <h1>{name} aka {heroName}</h1>
                <h1>{state1} aka {state2}</h1>
            </div>
        );
    }
}

export default Heroname3;
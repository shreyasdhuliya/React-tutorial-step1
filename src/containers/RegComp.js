import React, {Component} from 'react';

class RegComp extends Component {
    render(){
        console.log('REgcomp');
        return (
            <div>
                Regualr comp {this.props.name}
            </div>
        );
    }
}

export default RegComp;
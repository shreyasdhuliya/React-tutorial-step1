import React, {Component} from 'react';
import FunctionClick from '../components/FunctionClick';

class FunctionClick2 extends Component {
     alertmessage = () => {
        alert();
    }

    render(){
        return(
            <div>                
                <button onClick={this.alertmessage}>click</button>
            </div>
        );
    }
}

export default FunctionClick2;
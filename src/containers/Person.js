import React, { Component} from 'react';
import Person2 from '../components/Person2';

class Person extends Component {
    render() {
        return (<h1>{this.props.name}</h1>);
    }
};

export default Person;


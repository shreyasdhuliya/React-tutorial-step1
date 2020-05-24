import React, { Component } from 'react';
import { UserConsumer } from './UserContainer';

class ComponentC extends Component {
    render(){
        return (
        <UserConsumer >
             { (username) => {
                return  <h1>Comp {username}</h1>
            }}
        </UserConsumer >
        )
    }
}

export default ComponentC
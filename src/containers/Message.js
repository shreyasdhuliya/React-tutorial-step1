import React, {Component } from 'react';

class Message extends Component {
 constructor(props) {
     super(props);
     this.state = {
        message: 'welcome user',
     }
 }

    render() {
        return <h1>{this.state.message}</h1>
    }
};


class Message2 extends Component {
  state = {
      message2: 'hello again'
  }

  changemessage(){
      this.setState({message2: 'hello simi'});
  }

  render () {
    return (
        <div>
        <h1>{this.state.message2}</h1>
        <button type="button" onClick={() => this.changemessage()}>Change message</button>
        </div>
        );
  }

}

export  {Message,Message2};
import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
      super(props)
      this.state = {
                        username: '',
                        comments:'',
                        topic:''
                    }
  }

  onChangeInput = (event) => {
    this.setState({
        username:event.target.value
    })
}

    onChangeTextArea = (event) => {
        this.setState({
            comments:event.target.value
        })
  }

  onChangeSelect = (event) => {
    this.setState({
        topic:event.target.value
    })
}

onsubmitform = (event) => {
    event.preventDefault();
}

  render(){
      return(
      <div>
          <form onSubmit={this.onsubmitform}>
        <div><input 
            value={this.state.username} 
            onChange={this.onChangeInput}
        /></div>
        <div><textarea 
            value={this.state.comments}
            onChange={this.onChangeTextArea}    
        /></div>

        <div><select value={this.state.topic} onChange={this.onChangeSelect}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
        </select></div>
        <button type="submit">Submit</button>
        </form>        
      </div>
      )
  }

}

export {Form}
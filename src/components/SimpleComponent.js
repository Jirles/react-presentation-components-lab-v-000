// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    switch (this.state.mood) {
      case "happy":
        this.setState({mood: 'sad'})
        break;
      case "sad":
        this.setState({mood: 'happy'})
        break;
    }
    this.state.mood === 'happy' ? setState()
  }

  render(){
    return <div onClick={this.handleClick}>SimpleComponent is {this.state.mood}</div>
  }
}

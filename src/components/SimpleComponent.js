// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mood: 'happy'
    }
  }

  render(){
    return <div>SimpleComponent is {this.state.mood}</div>
  }
}

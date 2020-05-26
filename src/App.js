import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char'

class App extends Component {
  state = {
    text: '',
    length: 0
  }


  changeHandler = (event) => {
    const len = event.target.value.length;

    this.setState({
      text: event.target.value,
      length: len
    });

  }


  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={this.state.text}></input>
        <p>Length: {this.state.length}</p>
        <Validation length={this.state.length}></Validation>

        {this.state.text.split('').map(l => {
          return <Char letter={l}></Char>;
        })}
        
      </div>
    );
  }
}

export default App;

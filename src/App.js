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


  deleteLetterHandler = (index) => {
    const charArr = this.state.text.split('');
    charArr.splice(index, 1)

    this.setState({
      text: charArr.join(''),
      length: charArr.length
    });
  }


  render() {

    const chars = this.state.text.split('').map((l, index) => {
      return <Char
              key={index}
              clicked={() => this.deleteLetterHandler(index)} 
              letter={l}></Char>;
    })




    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={this.state.text}></input>
        <p>Length: {this.state.length}</p>
        <Validation length={this.state.length}></Validation>

        {chars}
        
      </div>
    );
  }
}

export default App;

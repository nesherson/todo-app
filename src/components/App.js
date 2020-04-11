import React, { Component } from 'react';
import Input from './Input';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  state = {
    textInput: '',
    listOfInputs: ["Can't go more basic than this"],
  };

  textInputHandler = (event) => {
    const text = event.target.value;
    this.setState({ textInput: text });
  };

  addInputToListHandler = () => {
    const list = [...this.state.listOfInputs];
    if (this.state.textInput.length >= 1) {
      const item = this.state.textInput;
      list.push(item);
      this.setState({ listOfInputs: list });
      this.setState({ textInput: '' });
    }
  };

  removeItemsFromListHandler = () => {
    const list = [];
    this.setState({ listOfInputs: list });
  };

  removeItemHandler = (index) => {
    const list = [...this.state.listOfInputs];
    list.splice(index, 1);
    this.setState({ listOfInputs: list });
  };

  render() {
    const list = this.state.listOfInputs.map((input, i) => {
      return (
        <ListItem
          key={i}
          value={input}
          removeItem={() => this.removeItemHandler(i)}
          completeItem={() => this.completeItemHandler(i)}
        />
      );
    });

    return (
      <div className='App'>
        <h1 className='header'>Basic af list</h1>
        <Input value={this.state.textInput} onChange={this.textInputHandler} />
        <div className='buttons'>
          <button className='btn' onClick={this.addInputToListHandler}>
            Submit
          </button>
          <button className='btn' onClick={this.removeItemsFromListHandler}>
            Remove All
          </button>
        </div>
        <ul className='list'>{list}</ul>
      </div>
    );
  }
}

export default App;

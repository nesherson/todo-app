import React, { Component } from 'react';
import List from './List';
import Task from './Task';
import NewTask from './NewTask';

import './App.css';

//task -> { id: 1, body: 'text', completed: false or true}

class App extends Component {
  state = {
    listOfTasks: [
      { id: 1, body: 'Task 1', completed: false },
      { id: 2, body: 'Task 2', completed: false },
    ],
    taskText: '',
  };

  textInputHandler = (event) => {
    const text = event.target.value;
    this.setState({ taskText: text });
  };

  addNewTaskHandler = () => {
    const id = this.state.listOfTasks.length + 1;
    const taskText = this.state.taskText;
    const task = {
      id: id,
      body: taskText,
      completed: false,
    };
    const list = [...this.state.listOfTasks];
    list.push(task);
    this.setState({ listOfTasks: list });
  };

  completeItemHandler = (index) => {
    const list = [...this.state.listOfTasks];
    list[index].completed = !list[index].completed;
    this.setState({ listOfTasks: list });
  };

  render() {
    const listOfTasks = this.state.listOfTasks.map((task, index) => {
      return (
        <Task
          value={task.body}
          key={task.id}
          completed={task.completed}
          onClick={() => this.completeItemHandler(index)}
        />
      );
    });

    return (
      <div className='app'>
        <List>
          {listOfTasks}
          <NewTask
            onChange={this.textInputHandler}
            onClick={this.addNewTaskHandler}
          />
        </List>
      </div>
    );
  }
}

export default App;

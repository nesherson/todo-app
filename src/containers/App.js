import React, { Component } from 'react';
import List from '../components/list/List';
import Task from '../components/task/Task';
import NewTask from '../components/newTask/NewTask';
import Header from '../components/header/Header';

import './App.css';

//task -> { id: 1, body: 'text', completed: false or true}

class App extends Component {
  state = {
    listOfTasks: [
      { id: 1, body: 'Wash dishes', completed: false },
      { id: 2, body: 'Read book', completed: false },
    ],
    taskText: '',
  };

  textInputHandler = (event) => {
    const text = event.target.value;
    this.setState({ taskText: text });
  };

  addNewTaskHandler = (event) => {
    event.preventDefault();
    if (this.state.taskText !== '') {
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
      this.setState({ taskText: '' });
    }
  };

  completeTaskHandler = (index) => {
    const list = [...this.state.listOfTasks];
    list[index].completed = !list[index].completed;
    this.setState({ listOfTasks: list });
  };

  removeTaskHandler = (index) => {
    const list = [...this.state.listOfTasks];
    list.splice(index, 1);
    this.setState({ listOfTasks: list });
  };

  render() {
    const listOfTasks = this.state.listOfTasks.map((task, index) => {
      return (
        <Task
          value={task.body}
          key={task.id}
          completed={task.completed}
          onClick={() => this.completeTaskHandler(index)}
          onDoubleClick={() => this.removeTaskHandler(index)}
        />
      );
    });

    return (
      <div className='app'>
        <Header />
        <div className='container'>
          <List>
            {listOfTasks}
            <NewTask
              value={this.state.taskText}
              onChange={this.textInputHandler}
              onSubmit={this.addNewTaskHandler}
              onClick={this.addNewTaskHandler}
            />
          </List>
        </div>
      </div>
    );
  }
}

export default App;

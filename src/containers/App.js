import React, { Component } from 'react';
import ListOfTasks from '../components/listOfTasks/ListOfTasks';
import Task from '../components/task/Task';
import NewTask from '../components/newTask/NewTask';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import ListOfSections from '../components/listOfSections/ListOfSections';

import './App.css';

class App extends Component {
  state = {
    listOfTasks: [
      { id: 1, body: 'Wash dishes', completed: false },
      { id: 2, body: 'Read book', completed: false },
    ],
    listOfSections: ['Section 1', 'Section 2'],
    input: '',
  };

  handleInput = (event) => {
    const text = event.target.value;
    this.setState({ input: text });
  };

  handleNewTask = (event) => {
    event.preventDefault();
    if (this.state.input !== '') {
      const id = this.state.listOfTasks.length + 1;
      const input = this.state.input;
      const task = {
        id: id,
        body: input,
        completed: false,
      };
      const list = [...this.state.listOfTasks];
      list.push(task);
      this.setState({ listOfTasks: list });
      this.setState({ input: '' });
    }
  };

  handleCompleteTask = (index) => {
    const list = [...this.state.listOfTasks];
    list[index].completed = !list[index].completed;
    this.setState({ listOfTasks: list });
  };

  handleRemoveTask = (index) => {
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
          onClick={() => this.handleCompleteTask(index)}
          onDoubleClick={() => this.handleRemoveTask(index)}
        />
      );
    });
    const listOfSections = [...this.state.listOfSections];

    return (
      <div className='app'>
        <Header />
        <div className='main'>
          <Sidebar>
            <ListOfSections>{listOfSections}</ListOfSections>
          </Sidebar>
          <div className='container'>
            <ListOfTasks name={'Inbox'}>
              {listOfTasks}
              <NewTask
                value={this.state.input}
                onChange={this.handleInput}
                onSubmit={this.handleNewTask}
                onClick={this.handleNewTask}
              />
            </ListOfTasks>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

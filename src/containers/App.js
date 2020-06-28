import React, { Component } from 'react';
import ListOfTasks from '../components/listOfTasks/ListOfTasks';
import Task from '../components/task/Task';
import NewTask from '../components/newTask/NewTask';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
//import ListOfSections from '../components/listOfSections/ListOfSections';
import Section from '../components/section/Section';

import './App.css';

class App extends Component {
  state = {
    listOfTasks: [
      { id: 1, body: 'Wash dishes', completed: false },
      { id: 2, body: 'Read book', completed: false },
    ],
    listOfSections: [
      {
        sectionName: 'Inbox',
        body: [
          {
            id: 3,
            body: 'Wash dishes',
            completed: false,
          },
        ],
      },
      {
        sectionName: 'Inbox 2',
        body: [
          {
            id: 3,
            body: 'Wash dishes 2',
            completed: false,
          },
        ],
      },
    ],
    input: '',
    currentSelected: 0,
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
      const tempSectionList = [...this.state.listOfSections];

      tempSectionList[0].body.push(list);
      list.push(task);
      this.setState({ listOfTasks: list });
      this.setState({ listOfSections: tempSectionList });
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

  handleSection = () => {
    this.setState({
      listOfSections: [
        {
          sectionName: 'Inbox',
          sectionBody: [...this.state.listOfTasks],
        },
      ],
    });
  };

  handleSectionClick = (i) => {
    this.setState({
      listOfTasks: [...this.state.listOfSections[i].body],
      currentSelected: this.state.listOfSections[i],
    });
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

    const listOfSections = this.state.listOfSections.map((section, i) => {
      return (
        <Section
          name={section.sectionName}
          onClick={() => this.handleSectionClick(i)}
          key={section.sectionName}
        />
      );
    });

    return (
      <div className='app'>
        <Header />
        <div className='main'>
          <div className='container'>
            <Sidebar>{listOfSections}</Sidebar>
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

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
    listOfTasks: [],
    listOfSections: [
      {
        sectionName: 'Inbox',
        body: [
          {
            id: 3,
            body: 'Inbox default task 1',
            completed: false,
          },
          {
            id: 4,
            body: 'Inbox default task 2',
            completed: false,
          },
        ],
      },
      {
        sectionName: 'Inbox 2',
        body: [
          {
            id: 3,
            body: 'Inbox2 default task 1',
            completed: false,
          },
          {
            id: 4,
            body: 'Inbox2 default task 2',
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
      const input = this.state.input;
      const task = {
        id: input,
        body: input,
        completed: false,
      };

      const tempSectionList = [...this.state.listOfSections];
      tempSectionList[this.state.currentSelected].body.push(task);

      this.setState({ listOfSections: tempSectionList });
      this.setState({ input: '' });
    }
  };

  handleCompleteTask = (index) => {
    const list = [...this.state.listOfSections];
    const currentSelected = this.state.currentSelected;

    list[currentSelected].body[index].completed = !list[currentSelected].body[
      index
    ].completed;
    this.setState({ listOfSections: list });
  };

  handleRemoveTask = (index) => {
    const list = [...this.state.listOfTasks];
    list.splice(index, 1);
    this.setState({ listOfTasks: list });
  };

  handleSectionClick = (i) => {
    this.setState({
      listOfTasks: [...this.state.listOfSections[i].body],
      currentSelected: i,
    });
  };

  render() {
    const currentSelected = this.state.currentSelected;
    const listOfTasks = this.state.listOfSections[currentSelected].body.map(
      (task, index) => {
        return (
          <Task
            value={task.body}
            key={task.id}
            completed={task.completed}
            onClick={() => this.handleCompleteTask(index)}
            onDoubleClick={() => this.handleRemoveTask(index)}
          />
        );
      }
    );

    console.log(this.state.listOfSections[this.state.currentSelected]);

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
            <ListOfTasks
              name={this.state.listOfSections[currentSelected].sectionName}
            >
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

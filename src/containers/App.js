import React, { Component } from 'react';
import ListOfTasks from '../components/listOfTasks/ListOfTasks';
import Task from '../components/task/Task';
import CustomInput from '../components/customInput/CustomInput';
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
        listOfTasks: [
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
        listOfTasks: [
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
    sectionNameInput: '',
    currentSelected: 0,
  };

  handleInput = (event) => {
    const text = event.target.value;
    this.setState({ input: text });
  };

  handleSectionNameInput = (e) => {
    const text = e.target.value;
    this.setState({ sectionNameInput: text });
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
      tempSectionList[this.state.currentSelected].listOfTasks.push(task);

      this.setState({ listOfSections: tempSectionList, input: '' });
    }
  };

  handleNewSection = (e) => {
    e.preventDefault();
    const input = this.state.sectionNameInput;
    const section = {
      sectionName: input,
      listOfTasks: [],
    };
    const tempSectionList = [...this.state.listOfSections];
    tempSectionList.push(section);

    this.setState({ listOfSections: tempSectionList, sectionNameInput: '' });
  };

  handleCompleteTask = (index) => {
    const list = [...this.state.listOfSections];
    const currentSelected = this.state.currentSelected;

    list[currentSelected].listOfTasks[index].completed = !list[currentSelected]
      .listOfTasks[index].completed;
    this.setState({ listOfSections: list });
  };

  handleRemoveTask = (index) => {
    const list = [...this.state.listOfSections];
    const currentSelected = this.state.currentSelected;
    list[currentSelected].listOfTasks.splice(index, 1);
    this.setState({ listOfSections: list });
  };

  handleSectionClick = (i) => {
    this.setState({
      listOfTasks: [...this.state.listOfSections[i].listOfTasks],
      currentSelected: i,
    });
  };

  render() {
    const currentSelected = this.state.currentSelected;
    const listOfTasks = this.state.listOfSections[
      currentSelected
    ].listOfTasks.map((task, index) => {
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
            <Sidebar>
              {listOfSections}
              <CustomInput
                name={'Section'}
                value={this.state.sectionNameInput}
                onChange={this.handleSectionNameInput}
                onSubmit={this.handleNewSection}
                onClick={this.handleNewSection}
              />
            </Sidebar>
            <ListOfTasks
              name={this.state.listOfSections[currentSelected].sectionName}
            >
              {listOfTasks}
              <CustomInput
                name={'Task'}
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

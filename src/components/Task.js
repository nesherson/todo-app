import React from 'react';
import './task.css';

const Task = (props) => {
  return (
    <div>
      <li
        className={`${props.completed ? 'completed' : ''}`}
        onClick={props.onClick}
      >
        {props.value}
      </li>
    </div>
  );
};

export default Task;

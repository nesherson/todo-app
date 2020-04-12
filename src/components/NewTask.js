import React from 'react';
import './newTask.css';

const NewTask = (props) => {
  return (
    <div className='newTask'>
      <input type='text' placeholder='Add task' onChange={props.onChange} />
      <button onClick={props.onClick}>Add</button>
    </div>
  );
};

export default NewTask;

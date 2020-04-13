import React from 'react';
import './newTask.css';

const NewTask = (props) => {
  return (
    <div className='newTask'>
      <form onSubmit={props.onSubmit}>
        <input
          value={props.value}
          type='text'
          placeholder='Add task'
          onChange={props.onChange}
        />
        <button onClick={props.onClick}>Add Task</button>
      </form>
    </div>
  );
};

export default NewTask;

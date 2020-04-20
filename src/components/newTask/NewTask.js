import React from 'react';
import style from './newTask.module.css';

const NewTask = (props) => {
  return (
    <div className={style.newTask}>
      <form onSubmit={props.onSubmit}>
        <input
          value={props.value}
          type='text'
          placeholder='Add task'
          onChange={props.onChange}
        />
        <button
          className={props.value === '' ? style.hidden : style.btn}
          onClick={props.onClick}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;

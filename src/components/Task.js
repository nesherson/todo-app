import React from 'react';
import './task.css';

const Task = (props) => {
  return (
    <div className='task'>
      <div
        className={`checkbox ${props.completed ? 'check-item' : ''}`}
        onClick={props.onClick}
      >
        <svg
          className={`checkbox-svg ${props.completed ? 'check-item-svg' : ''}`}
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
        >
          <path
            fill='currentColor'
            d='M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
            fill-rule='evenodd'
          ></path>
        </svg>
      </div>
      <li
        className={`${props.completed ? 'completed' : ''}`}
        onDoubleClick={props.onDoubleClick}
      >
        {props.value}
      </li>
    </div>
  );
};

export default Task;

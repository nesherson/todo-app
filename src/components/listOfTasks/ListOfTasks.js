import React from 'react';
import './listOfTasks.css';

const ListOfTasks = (props) => {
  return (
    <div className='list'>
      <h1>{props.name}</h1>
      <ul>{props.children}</ul>
    </div>
  );
};

export default ListOfTasks;

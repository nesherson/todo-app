import React from 'react';
import './list.css';

const List = (props) => {
  return (
    <div className='list'>
      <h1>List 1</h1>
      <ul>{props.children}</ul>
    </div>
  );
};

export default List;

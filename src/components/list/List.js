import React from 'react';
import './list.css';

const List = (props) => {
  return (
    <div className='list'>
      <h1>Inbox</h1>
      <ul>{props.children}</ul>
    </div>
  );
};

export default List;

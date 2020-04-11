import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  return (
    <li className='ListItem'>
      {props.value}
      <button className='list-item-btn' onClick={props.removeItem}>
        X
      </button>
    </li>
  );
};

export default ListItem;

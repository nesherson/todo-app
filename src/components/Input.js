import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div className='Input'>
      <input type='text' value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Input;

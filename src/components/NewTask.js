import React from 'react';

const NewTask = (props) => {
  return (
    <div>
      <input type='text' placeholder='Add task' onChange={props.onChange} />
      <button onClick={props.onClick}>Add</button>
    </div>
  );
};

export default NewTask;

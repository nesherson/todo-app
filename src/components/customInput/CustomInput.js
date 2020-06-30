import React from 'react';
import style from './CustomInput.module.css';

const CustomInput = (props) => {
  return (
    <div className={style.customInput}>
      <form onSubmit={props.onSubmit}>
        <input
          className={props.name === 'Section' ? style.sectionInput : ''}
          value={props.value}
          type='text'
          placeholder={`Add ${props.name}`}
          onChange={props.onChange}
        />
        <button
          className={
            props.value === ''
              ? style.hidden
              : props.name === 'Section'
              ? style.sectionBtn
              : ''
          }
          onClick={props.onClick}
        >
          {`Add ${props.name === 'Section' ? '' : props.name}`}
        </button>
      </form>
    </div>
  );
};

export default CustomInput;

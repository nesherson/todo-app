import React from 'react';
import style from './CustomInput.module.css';

const CustomInput = (props) => {
  return (
    <div className={style.customInput}>
      <form onSubmit={props.onSubmit}>
        <div className={style.addItem}>
          <svg className={style.addItemSvg} width='20' height='20'>
            <path
              d='M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z'
              fill='currentColor'
              fill-rule='evenodd'
            ></path>
          </svg>
        </div>
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
              : style.taskBtn
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

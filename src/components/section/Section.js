import React from 'react';
import style from './section.module.css';

const Section = (props) => {
  const selected = props.isSelected();
  return (
    <li
      className={selected === true ? style.listItemHl : style.listItem}
      onClick={props.onClick}
    >
      {props.name}
    </li>
  );
};

export default Section;

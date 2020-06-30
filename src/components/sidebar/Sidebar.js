import React from 'react';
import style from './sidebar.module.css';

const Sidebar = (props) => {
  return (
    <div className={style.sidebar}>
      <ul className={style.list}>{props.children}</ul>
    </div>
  );
};

export default Sidebar;

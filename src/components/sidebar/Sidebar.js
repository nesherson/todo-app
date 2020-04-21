import React from 'react';
import style from './sidebar.module.css';

const Sidebar = (props) => {
  return <div className={style.sidebar}>{props.children}</div>;
};

export default Sidebar;

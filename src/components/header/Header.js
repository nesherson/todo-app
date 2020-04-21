import React from 'react';
import style from './header.module.css';

const Header = () => {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <div className={style.header}>
      <header>
        <span className={style.dateTime}>
          {date.toLocaleDateString('en-UK', options)}
        </span>
      </header>
    </div>
  );
};

export default Header;

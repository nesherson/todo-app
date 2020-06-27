import React from 'react';

const Section = (props) => {
  return <li onClick={props.onClick}>{props.name}</li>;
};

export default Section;

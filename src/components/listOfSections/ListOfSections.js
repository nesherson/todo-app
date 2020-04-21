import React from 'react';

const ListOfSections = (props) => {
  return (
    <ul>
      {props.children.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ul>
  );
};

export default ListOfSections;

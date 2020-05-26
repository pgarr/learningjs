import React from 'react';

function CharComponent(props) {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  };

  return (
    <p style={style} onClick={props.click}>
      {props.children}
    </p>
  );
}

export default CharComponent;

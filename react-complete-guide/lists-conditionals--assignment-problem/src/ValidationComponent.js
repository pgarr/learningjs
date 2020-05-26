import React from 'react';

function ValidationComponent(props) {
  let text = 'Text too short';
  if (props.length >= 5) {
    text = 'Text long enough';
  }
  return <p>{text}</p>;
}

export default ValidationComponent;

import React from 'react';
import { playNote } from '../audio';
import './string.css';  // Import the corresponding CSS file for styling

const String = (props) => {
  const handleClick = () => {
    playNote(props.freq); // Play the note when the button is clicked
  };

  return (
    <button className="string-button" onClick={handleClick}>
      {props.name}
    </button>
  );
};

export default String;

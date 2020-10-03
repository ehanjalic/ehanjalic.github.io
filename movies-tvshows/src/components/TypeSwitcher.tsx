import React from 'react';
import './TypeSwitcher.css';

function TypeSwitcher() {
    return (
        <div className="divButtons">
            <button type="button" className="typeButton" id="leftTypeButton">TV SHOWS</button>
            <button type="button" className="typeButton">MOVIES</button>
        </div>
    );
  }

  export default TypeSwitcher;
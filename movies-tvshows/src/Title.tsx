import React from 'react';
import './Title.css';

function Title(props: { image: string; name: string;}) {
    return (
      <div className="title" onClick={openMovie}>        
        <img src={props.image} className="title-image" alt="logo" />
        <p className="title-name">{props.name}</p>
      </div>
    );
  }

  function openMovie(){
    alert("KLIKNUT");
  }
  
  export default Title;
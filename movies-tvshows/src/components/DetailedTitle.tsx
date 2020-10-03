import React from 'react';
import './DetailedTitle.css';

function DetailedTitle(props: {image: string; overview: string}) {
    return (
      <div>
          <img src={props.image} className="title-image" alt="logo" />
          <p>{props.overview}</p>
      </div>
    );
  }

  export default DetailedTitle;
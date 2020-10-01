import React from 'react';
import './DetailedTitle.css';

function DetailedTitle(props: {image: string; overview: string}) {
    return (
      <div>
          <img src="https://upload.wikimedia.org/wikipedia/en/c/c1/Sonic_the_Hedgehog_poster.jpg" className="title-image" alt="logo" />
      </div>
    );
  }

  export default DetailedTitle;
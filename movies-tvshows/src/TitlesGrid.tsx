import React from 'react';
import './TitlesGrid.css';
import Title from './Title';

function TitlesGrid(props: {pshows: {image: string, name: string}[]} ) {    
    const shows = new Array();
    props.pshows.forEach(element => {
        let newShow = <Title image = {element.image} name = {element.name} />
        shows.push(newShow);
    })
    
    return (
        <div>
            {shows}
        </div>
    );
}


export default TitlesGrid;
import React from 'react'
import { MovieContextConsumer, MovieContextInterface } from "./MovieContext";

// const movieContext: MovieContextInterface = {
  //   movies: [{ image: "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg", name: "SCARY MOVIE",  video: "" },
  //   { image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Sonic_the_Hedgehog_poster.jpg", name: "SONICLINJEMA", video: "" },
  //   { image: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", name: "DORA",  video: "" },
  //   { image: "https://lumiere-a.akamaihd.net/v1/images/riseofskywalker-moviepage-emeagrid-m_a2600ffe.jpeg?region=0,0,800,600", name: "STAR WARS",  video: "" },
  //   { image: "https://static.toiimg.com/photo/73491567.jpeg", name: "TRANCE", video: "" }
  // ]
// }

var movieContext: MovieContextInterface = {
  movies : []
}

function setMovieContext(){
  fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=990862af87299bea8d545f30f6e5d46d&language=en-US&page=1')
        .then(res => res.json())
        .then((data) => {
          console.log(data);
            movieContext.movies = [{ image: "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg", name: "SCARY MOVIE",  video: "" },
            { image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Sonic_the_Hedgehog_poster.jpg", name: "SONICLINJEMA", video: "" },
            { image: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", name: "DORA",  video: "" },
            { image: "https://lumiere-a.akamaihd.net/v1/images/riseofskywalker-moviepage-emeagrid-m_a2600ffe.jpeg?region=0,0,800,600", name: "STAR WARS",  video: "" },
            { image: "https://static.toiimg.com/photo/73491567.jpeg", name: "TRANCE", video: "" }
          ];
        })
        .catch(console.log)
}


function getMovieContext(){
    return movieContext;
}

export default {getMovieContext, setMovieContext}
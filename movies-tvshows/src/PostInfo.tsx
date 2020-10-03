import * as React from "react";
import { MovieContextConsumer } from "./context/MovieContext";

import TitlesGrid from './components/TitlesGrid'


export const PostInfo = () => (
  <MovieContextConsumer>
    {movieContext =>
      movieContext && (
        <div>
            <TitlesGrid pshows = {movieContext.movies}></TitlesGrid>
          {/* Name: {appContext.movies[0].title} <br />
          Author: {appContext.shows[0].imageOrVideo} <br /> */}
          {/* Url: {appContext.url} */}
        </div>
      )
    }
  </MovieContextConsumer>
);
import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm'
import TypeSwitcher from './components/TypeSwitcher'
import movieContexts from './context/getMovieContext'
import getShowsContext from './context/getShowsContext'

import { MovieContextProvider } from "./context/MovieContext";
import { ShowsContextProvider } from "./context/ShowsContext";
import { PostInfo } from './PostInfo';

class App extends React.Component {


  componentDidMount(){
    movieContexts.setMovieContext();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.rubicon-world.com/logo.png" className="rubiconImage" alt="logo" />
          <p>TV SHOWS AND MOVIES</p>
        </header>
        <TypeSwitcher />
        <SearchForm />

        <MovieContextProvider value={movieContexts.getMovieContext()}>
          <PostInfo />
        </MovieContextProvider>

      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import TitlesGrid from './TitlesGrid'
import SearchForm from './SearchForm'
import TypeSwitcher from './TypeSwitcher'
import DetailedTitle from './DetailedTitle'


type titlesState = {
  titles: {image:string; name:string}[];
}; 

class App extends React.Component<{},titlesState> {
  state: titlesState = {
    titles : [{ image: "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg", name: "SCARY MOVIE" },
    { image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Sonic_the_Hedgehog_poster.jpg", name: "SONIC" },
    { image: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", name: "DORA" },
    { image: "https://lumiere-a.akamaihd.net/v1/images/riseofskywalker-moviepage-emeagrid-m_a2600ffe.jpeg?region=0,0,800,600", name: "STAR WARS" },
    { image: "https://static.toiimg.com/photo/73491567.jpeg", name: "TRANCE" }
  ]
  };
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.rubicon-world.com/logo.png" className="rubiconImage" alt="logo" />
        <p>TV SHOWS AND MOVIES</p>
      </header>
      <TypeSwitcher/>
      <SearchForm/>
      <TitlesGrid pshows = {this.state.titles}/>
      <DetailedTitle image="https://www.rubicon-world.com/logo.png" overview="WUUHUUHUHU"></DetailedTitle>
    </div>
  );
}
}

export default App;

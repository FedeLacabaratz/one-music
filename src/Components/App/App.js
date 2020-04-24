import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar'
import { SearchResults } from '../SearchResults/SearchResults'
import { Playlist } from '../Playlist/Playlist'

function App() {
  return (
    <div>
      <h1><span className="greenHighlight" >One</span><span className="yellowHighlight">Mu</span><span className="redHighlight" >sic</span><br></br><h3>“One good thing about music, when it hits you, you feel no pain.” - Bob Marley</h3></h1>
      <div className="App">
        <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
      </div>
    </div>
  );
}

export default App;

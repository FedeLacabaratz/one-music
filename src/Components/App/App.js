import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults:[
          {
            id: 1, 
            name:'Breakfast In America', 
            artist:'Supertramp', 
            album:'Breakfast In America'
          },
          {
            id: 2, 
            name:'Lady In Red', 
            artist:'Chris De Burgh', 
            album:'Greatest Hits'
          },
          {
            id: 3, 
            name:'Serve the Servants', 
            artist:'Nirvana', 
            album:'In Utero'
          }
        ],
      playlistName: 'My super-cool Playlist',
      playlistTracks: [
        {
        id: 4,
        name: 'playlistName1',
        artist: 'playlistArtist1',
        album: 'playlistAlbum1'
        },
        {
          id: 5,
          name: 'playlistName2',
          artist: 'playlistArtist2',
          album: 'playlistAlbum2'
        }, 
        {
          id: 6,
          name: 'playlistName3',
          artist: 'playlistArtist3',
          album: 'playlistAlbum3'
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <h1><span className="greenHighlight" >One</span><span className="yellowHighlight">Mu</span><span className="redHighlight" >sic</span><br></br><p>“One good thing about music, when it hits you, you feel no pain.” - Bob Marley</p></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

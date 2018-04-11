import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
          searchResults: Spotify.search(),
          playlistName: 'New Playlist',
          playlistTracks: []
        };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
  }

  addTrack(track) {
      let tracks = this.state.playlistTracks;
       if (!tracks.includes(track)) {
          tracks.push(track);
        }
        this.setState({playlistTracks: tracks});
  }
  updatePlaylistName(name) {
    this.setState({ name });
  }
  Spotify.savePlaylist(track) {
  const trackURI = this.state.playlistTracks.map(track => track.uri);
  }

  search(search) {
    console.log(search);
  }
  render() {
    return (
  <div>
    <h1>Ja<span className="highlight">mmm</span>ing</h1>
    <div className="App">
        <SearchBar onSearch={this.search} />
      <div className="App-playlist">
          <SearchResults onAdd={this.addTrack} />
          <Playlist
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onChange={this.handleNameChange}
            />
      </div>
    </div>
  </div>
    );
  }
}

export default App;

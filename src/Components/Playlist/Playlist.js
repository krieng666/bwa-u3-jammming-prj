import React from 'react';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
  }
  handleNameChange(e){
  this.props.onNameChange(e.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <TrackList
          playlistName={this.state.playlistName}
          playlistTracks={this.state.playlistTracks}
          onRemove={this.props.onRemove}/>
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>

    );
  }
}

export default Playlist;

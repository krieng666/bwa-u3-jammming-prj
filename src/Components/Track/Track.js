import React from 'react';
import './Track.css';

class Track extends React.Component {
  constructor(props) {
      super(props);
      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
}
renderAction(props) {
 if (this.props.isRemoval) {
  return <a className="Track-action" onClick={this.removeTrack} onClick={this.removeTrack}>-</a>
} else {
  return <a className="Track-action" onClick={this.removeTrack} onClick={this.addTrack}>+</a>
  }
}
addTrack() {
  this.props.onAdd(this.props.track);
}
removeTrack(track) {
  let remove = playlistTracks.filter(track.id => playlistTracks.track.id );
  this.state({playlistTracks: remove});
}
  render() {

    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
      </div>

    );
  }
}

export default Track;

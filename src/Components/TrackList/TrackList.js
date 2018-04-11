import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
  removeTrack() {
    this.props.track(this.props.onRemove);
  }
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
              track={track}
              key={track.id}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
            />
          );
        })}
      </div>

    );
  }
}

export default TrackList;

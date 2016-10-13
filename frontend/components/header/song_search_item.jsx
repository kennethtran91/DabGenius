import React from 'react';
import { Link } from 'react-router';

class SongSearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="search-result" onClick={this.props.onClick} key={this.props.song.id} >
        <Link to={`songs/${this.props.song.id}`}>{this.props.song.title} by {this.props.song.artist}</Link>
      </li>
    );
  }
}

export default SongSearchItem;

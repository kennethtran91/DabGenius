import React from 'react';

class SongsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchString: ''};
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({searchString: e.target.value});
  }
// <input className="search-bar" type="text" placeholder="Search for a song..."></input>
  render() {
    let songs = this.props.songs;
    let searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      songs = songs.filter((song) => {
        return song.title.toLowerCase().match(searchString);
      });
    }

    return (
      <div className="song-search">
        <input className="search-input" type="text" value={this.state.searchString} onChange={this.updateSearch}
          placeholder="Search for a song by title"/>
        <ul>
          {songs.map((song) => {
            return <li className="search-result">{song.title} by {song.artist}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default SongsSearch;

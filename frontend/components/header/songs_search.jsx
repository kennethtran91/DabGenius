import React from 'react';
import SongSearchItem from './song_search_item';

class SongsSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchString: ''};
    this.updateSearch = this.updateSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({searchString: e.target.value});
  }

  clearSearch() {
    this.setState({searchString: ''});
  }

  render() {
    let songs = [];
    let searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      songs = this.props.songs.filter((song) => {
        return song.title.toLowerCase().match(searchString);
      });
    }

    return (
      <div className="song-search">
        <input className="search-input" type="text" value={this.state.searchString} onChange={this.updateSearch}
          placeholder="Search for a song by title"/>
        <ul>
          {songs.map((song) => {
            return(
              <SongSearchItem song={song} onClick={this.clearSearch} key={song.id}/>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SongsSearch;

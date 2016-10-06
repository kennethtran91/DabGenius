import { connect } from 'react-redux';
import SongsIndex from './songs_index';
import { requestAllSongs } from '../../actions/song_actions';

const mapStateToProps = ( state ) => {
  return {
    songs: state.songs.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestAllSongs: () => dispatch(requestAllSongs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongsIndex);

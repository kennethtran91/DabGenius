import { createSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import EditSongForm from './edit_song_form';

const mapStateToProps = (state) => {

  return {
    errors: state.songs.errors,
    currentSong: state.songs.songDetail
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    createSong: (song, callback) => dispatch(createSong(song, callback))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSongForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSongForm);

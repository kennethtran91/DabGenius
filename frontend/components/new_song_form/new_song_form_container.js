import { createSong } from '../../actions/song_actions';
import { connect } from 'react-redux';
import NewSongForm from './new_song_form';

const mapStateToProps = (state) => {

  return {
    errors: state.songs.errors,
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
)(NewSongForm);

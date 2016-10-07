import { connect } from 'react-redux';
import SongDetail from './song_detail';
import { requestOneSong } from '../../actions/song_actions';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser,
    song: state.songs.songDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestOneSong: (song) => dispatch(requestOneSong(song))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);

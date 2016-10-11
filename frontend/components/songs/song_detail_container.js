import { connect } from 'react-redux';
import SongDetail from './song_detail';
import { requestOneSong } from '../../actions/song_actions';
import { requestAllAnnotations } from '../../actions/annotation_actions';
// import { requestAllComments } from '../../actions/comment_actions';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.currentUser,
    song: state.songs.songDetail
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestOneSong: (song) => dispatch(requestOneSong(song)),
    requestAllAnnotations: (id) => dispatch(requestAllAnnotations(id)),
    // requestAllComments: (id) => dispatch(requestAllComments(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);

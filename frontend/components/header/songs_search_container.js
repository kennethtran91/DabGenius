import { connect } from 'react-redux';
import SongsSearch from './songs_search';

const mapStateToProps = (state) => {
  return {
    songs: state.songs.songs
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout())
//   };
// };

export default connect(
  mapStateToProps
)(SongsSearch);

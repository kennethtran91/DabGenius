import React from 'react';
import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';
import CommentForm from './comment_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentSong: state.songs.songDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (comment, callback) => dispatch(createComment(comment, callback)),
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);

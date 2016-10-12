import React from 'react';
import { createAnnotation, requestOneAnnotation, upvoteAnnotation, downvoteAnnotation } from '../../actions/annotation_actions';
import { connect } from 'react-redux';
import Annotation from './annotation';
import { requestAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentSong: state.songs.songDetail
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation)),

    requestOneAnnotation: (id) => dispatch(requestOneAnnotation),

    requestAllComments: (id) => dispatch(requestAllComments(id)),

    upvoteAnnotation: (id) => dispatch(upvoteAnnotation(id)),

    downvoteAnnotation: (id) => dispatch(downvoteAnnotation(id))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);

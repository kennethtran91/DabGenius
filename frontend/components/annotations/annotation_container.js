import React from 'react';
import { createAnnotation } from '../../actions/annotation_actions';
import { connect } from 'react-redux';
import Annotation from './annotation';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createAnnotation: (annotation) => dispatch(createAnnotation(annotation))
  };

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Annotation);

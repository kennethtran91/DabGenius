import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.session.currentUser ? true : false,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = (location.hash.includes("login")) ? 'login' : 'signup';
  const action = (formType === 'signup') ? signup : login;
  return {
    processForm: (user, callback) => dispatch(action(user, callback)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

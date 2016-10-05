import React from 'react';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignInForm from './sign_in_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => ({

  login: (user) => dispatch(login(user))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);

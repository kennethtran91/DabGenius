import React from 'react';
import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import SignUpForm from './sign_up_form';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch) => ({

  signup: (user) => dispatch(signup(user))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);

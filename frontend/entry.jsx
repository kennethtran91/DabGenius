import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPI from './util/session_api_util';

window.login = SessionAPI.login;
window.signup = SessionAPI.signup;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Dab Genius</h1>, root);
});

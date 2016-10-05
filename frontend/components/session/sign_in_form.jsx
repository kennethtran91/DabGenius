import React from 'react';

class SignInForm extends React.Component{
  render() {
    return (
      <div>
        <h2>Sign in!</h2>
        <input type="text" placeholder="username..."></input>
        <br></br>
        <input type="password" placeholder="password..."></input>
      </div>
    );
  }
}

export default SignInForm;

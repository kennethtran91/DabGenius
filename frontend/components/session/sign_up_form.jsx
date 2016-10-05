import React from 'react';

class SignUpForm extends React.Component{
  render() {
    return (
      <div>
        <h2>Sign up!</h2>
        <input type="text" placeholder="username..."></input>
        <br></br>
        <input type="password" placeholder="password..."></input>
      </div>
    );
  }
}

export default SignUpForm;

import React from 'react';

class SignUpForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
    this.props.closeModal();
  }

  render() {
    return (

      <div className="session-form group">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h2 className="session-form-header">SIGN UP</h2>
          <br></br>
          <br></br>
          <input onChange={this.updateUsername}
            className="username-input"
            type="text"
            placeholder="username..."></input>
          <br></br>
          <input onChange={this.updatePassword}
            className="password-input"
            type="password"
            placeholder="password..."></input>
          <br></br>
          <br></br>
          <input className="session-submit" type="submit"/>

        </form>
      </div>
    );
  }
}

export default SignUpForm;
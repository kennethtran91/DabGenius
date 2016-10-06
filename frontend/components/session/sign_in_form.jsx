import React from 'react';

class SignInForm extends React.Component{
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
    this.props.login(user);
    this.props.closeModal();
  }

  render() {
    return (
      <div className="session-form group">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h2 className="session-form-header">SIGN IN</h2>
          <br></br>
          <br></br>
          <div className="session-form-input-container">

            <input onChange={this.updateUsername}
              className="session-input"
              type="text"
              placeholder="username..."></input>
            <br></br>
            <input onChange={this.updatePassword}
              className="session-input"
              type="password"
              placeholder="password..."></input>
          </div>
          <br></br>
          <br></br>
          <input className="session-submit" type="submit"/>

        </form>
      </div>
    );
  }
}

export default SignInForm;

import React from 'react';
import ReactDOM from 'react-dom';

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
    if (this.props.currentUser) {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.usernameInput).focus(), 0);
  }

  render() {

    let errors = null;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map((error, i) => {
        return <li key={`error-${i}`}>{error}</li>;
      });
    }

    return (
      <div className="session-form group">
        <a href="/auth/facebook" className="facebook-login">
          <img className="facebook-logo" src={window.fbLoginButton}/>
        </a>
        <br/>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h2 className="session-form-header">SIGN UP</h2>
          <ul className="session-errors">
            {errors}
          </ul>
          <div className="session-form-input-container">
            <input onChange={this.updateUsername}
              ref="usernameInput"
              className="session-input"
              type="text"
              placeholder="username"></input>
            <br></br>
            <input onChange={this.updatePassword}
              className="session-input"
              type="password"
              placeholder="password"></input>
          </div>
          <br></br>
          <br></br>
          <input className="session-submit" type="submit"/>

        </form>
      </div>
    );
  }
}

export default SignUpForm;

import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleUsername(e) {
    this.setState({username: e.target.value});
  }

  handlePassword(e) {
    this.setState({password: e.target.value});
  }

  redirect() {
    if (this.props.loggedIn) {
      hashHistory.push("/");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user, this.redirect);
  }

  otherLink() {
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up</Link>;
		} else {
			return <Link to="/login">log in</Link>;
		}
	}

  displayErrors() {
		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={i}>
						{error}
					</li>
				))}
			</ul>
		);
	}

  render() {

    if (!this.props.loggedIn) {

      return (
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <br></br>
            {this.props.formType} or {this.otherLink()}
            { this.renderErrors }
            <div className="login-form">
              <br></br>
              <input type="text"
                value={this.state.username}
                onChange={this.handleUsername}
                className="login-input"
                placeholder="Username..."/>

              <br></br>
              <input type="password"
                value={this.state.password}
                onChange={this.handlePassword}
                className="login-input"
                placeholder="Password..."/>

              <br></br>
              <input type="submit" value={this.formType} />
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div>Hello {this.state.username}</div>
      );
    }
	}

}

export default SessionForm;

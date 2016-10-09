import React from 'react';
import ReactDOM from 'react-dom';

class SignInForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestSignIn = this.guestSignIn.bind(this);
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const user = this.state;
    this.props.login(user);
    if (this.props.currentUser) {
      this.props.closeModal();
    }
  }

  componentDidMount() {
    setTimeout(() => ReactDOM.findDOMNode(this.refs.usernameInput).focus(), 0);
  }

  guestSignIn(e) {
    e.preventDefault();
    // this.setState({username: "guest"});
    // this.setState({password: "rapgod"});
    // this.handleSubmit();
    const session = this;
    setTimeout(() => {
      session.setState({username: "g"});
      setTimeout(() => {
        session.setState({username: "gu"});
        setTimeout(() => {
          session.setState({username: "gue"});
          setTimeout(() => {
            session.setState({username: "gues"});
            setTimeout(() => {
              session.setState({username: "guest"});
              setTimeout(() => {
                session.setState({password: "r"});
                setTimeout(() => {
                  session.setState({password: "ra"});
                  setTimeout(() => {
                    session.setState({password: "rap"});
                    setTimeout(() => {
                      session.setState({password: "rapg"});
                      setTimeout(() => {
                        session.setState({password: "rapgo"});
                        setTimeout(() => {
                          session.setState({password: "rapgod"});
                          setTimeout(() => {
                            session.handleSubmit();
                          });
                        }, 20);
                      }, 20);
                    }, 20);
                  }, 20);
                }, 20);
              }, 20);
            }, 20);
          }, 20);
        }, 20);
      }, 20);
    }, 20);
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
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h2 className="session-form-header">SIGN IN</h2>
          <br></br>
          <ul className="session-errors">
            {errors}
          </ul>
          <br></br>
          <div className="session-form-input-container">
            <input onChange={this.updateUsername}
              ref = "usernameInput"
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
          <button onClick={this.guestSignIn} className="guest-sign-in">
            sign in as guest
          </button>
        </form>
      </div>
    );
  }
}

export default SignInForm;

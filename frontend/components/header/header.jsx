import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionModal from '../modal/session_modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let alternate = null;
    if (this.props.currentUser) {
        alternate = (
          <div>
            <div className="user-greeting"> Welcome {this.props.currentUser.username}
            </div>
            <button className="logout-button"
              onClick={this.props.logout}>log out
            </button>
          </div>);
    }

    let action = alternate || <SessionModal/>;

    return (
      <header className="header">
        <nav className="header-nav group">
          <div className="search-container">
            <input className="search-bar" type="text" placeholder="Search for a song..."></input>
            <img src="http://simpleicon.com/wp-content/uploads/active-search.png" className="mag-glass"></img>
          </div>
          <h1 className="logo">DAB GENIUS</h1>
          {action}
        </nav>
      </header>
    );
  }

}

export default Header;

import React from 'react';
import SessionModal from '../modal/session_modal';
import { Link } from 'react-router';
import SongsSearchContainer from './songs_search_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {
    let greeting = null;
    if (this.props.currentUser) {
        greeting = (
          <div className="right-side-content">
            <div className="user-greeting"> Welcome {this.props.currentUser.username}
            </div>
            <button className="logout-button"
              onClick={this.props.logout}>log out
            </button>
          </div>);
    }

    let action = greeting || <SessionModal/>;

    return (
      <header className="header">
        <nav className="header-nav group">
          <div className="search-container group">
            <SongsSearchContainer/>
            <img src= "http://simpleicon.com/wp-content/uploads/active-search.png" className="mag-glass"></img>
          </div>
          <div className="header-logo-container">
            <Link to="/" className="logo">DAB GENIUS</Link>
          </div>
          {action}
        </nav>
      </header>
    );
  }

}

export default Header;

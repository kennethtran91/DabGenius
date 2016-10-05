import React from 'react';
import { Link, hashHistory } from 'react-router';
import SessionModal from '../modal/session_modal';

const Header = (loggedIn) => {
  return (

    <header className="header">
      <nav className="header-nav group">
        <div className="search-container">
          <input className="search-bar" type="text" placeholder="Search for a song..."></input>
          <img src="http://simpleicon.com/wp-content/uploads/active-search.png" className="mag-glass"></img>
        </div>
        <div className="wrapper">
          <div className="logo">DAB GENIUS</div>
        </div>
          {SessionModal}
      </nav>
    </header>
  );
};

export default Header;

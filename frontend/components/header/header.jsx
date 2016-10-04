import React from 'react';
import { Link, hashHistory } from 'react-router';

const Header = (loggedIn) => {
  return (

    <header className="header">
      <nav className="header-nav group">
        <input className="search-bar" type="text" placeholder="Search for a song..."></input>
        <div className="wrapper">
          <div className="logo">DAB GENIUS</div>
        </div>
        <ul className="session-list-actions">
          <li><Link to="/login">log in</Link></li>
          <li><Link to="/signup">signup</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from 'react';

const Header = (loggedIn) => {
  return (

    <header className="header">
      <nav className="header-nav group">
        <input className="search-bar" type="text" placeholder="Search for a song..."></input>
        <div className="logo">DAB GENIUS</div>
        <ul className="session-list-actions">
          <li><a href="/login">log in</a></li>
          <li><a href="/signup">signup</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

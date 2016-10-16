import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <nav className="footer-nav group">
          <ul className="footer-links">
            <li>
              <a href="https://github.com/jd479/DabGenius">
                <img src={window.github} className="github-logo"/></a>
            </li>
            <li>
              <p>By Jeffrey Du</p>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;

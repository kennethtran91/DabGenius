import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <nav className="footer-nav">
          <ul className="footer-links">
            <li>
              <a href="https://github.com/jd479/DabGenius">Github</a>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Footer;

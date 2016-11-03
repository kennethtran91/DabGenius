import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <nav className="footer-nav group">
          <div className="footer-links">
            <a href="https://github.com/jd479/DabGenius">
              <img src={window.github} className="github-logo"/></a>
            <a href="http://jeffdu.com/">
              <img src={window.about} className="github-logo"/></a>
            <a href="https://www.linkedin.com/in/jeffreydu">
              <img src={window.linkedin} className="github-logo"/></a>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;

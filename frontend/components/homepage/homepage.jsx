import React from 'react';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="homepage">
        <section className="about-container">
          <p className="about-info">
            Dab genius is a web application that allows its users to annotate their favorite songs.
          </p>
        </section>
      </div>
    );
  }
}

export default Homepage;

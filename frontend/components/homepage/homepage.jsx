import React from 'react';
import SongsIndexContainer from '../songs/songs_index_container';
import { Link } from 'react-router';

class Homepage extends React.Component{
  constructor(props) {
    super(props);
  }
  //maybe just do features and medium icons (like youtube thumbnails)

  render() {
    return (
      <div className="homepage-container group">
        <div className="add-song-link-container">
          <Link className="add-song-link" to="/api/songs/new">ADD NEW SONG</Link>
        </div>
        <section className="right-column">
          <section className="about-container">
            <p className="about-info">
              <img className="headphones" src="https://s3.amazonaws.com/dabgeniusdev/headphones.jpg?X-Amz-Date=20161007T190621Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=1980fb511a41c0645de3e2ddddbe64ed59ba9000f41940d4a2ea60814fe9a531&X-Amz-Credential=ASIAJAXW6BTVXRV24ARQ/20161007/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEPT//////////wEaDA2Zb/gGThePy8mfJyL6ATUy1i/xD6S3zA9PsO%2BiRXT6epNhdmo%2B0fUUE5IpNqWan19ub62gfAm8TiofEUW8R4V0FUF9qMRgDQ9RxntPJYPuvtWVES3UBOrS4X9gKxMH9r2FYiMF8e2wwlIi02yTdv4DtfjHgdC8VCc9w/U1AHrIWGunHjJ/Xd5Cl6PE5NjEF0UGeNTYD7/4ZbrP%2BpS64dF7rH9wl3U74E1e7TH00Q2heBnCWBn/li%2Bp/oQWUWDEvWNJBSuY0m15BTzEr9%2B4Y5NHxJO5XlRU5Mc0sJWB%2BzNtEmxZTOEgP4iunPE7uaPrhnUnVKirc8hvFCtK4ExBCGl1lXVB%2BA/V0nkoiuTfvwU%3D"></img>
              Dab genius is a web application that allows its users to annotate their favorite songs.
            </p>
          </section>
        </section>
        <section className="left-column">
          <ul className="songs-list">
            <SongsIndexContainer/>
          </ul>

        </section>
      </div>
    );
  }
}

export default Homepage;

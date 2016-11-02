# Dab Genius

[Dab Genius live][heroku]

[heroku]: http://www.dabgenius.us/

Rap Genius inspired `Dab Genius` is a full-stack web application that that incorporates:
  0. Ruby on Rails
  0. FaceBook's React.js
  0. Redux
  0. PostgreSQL

While using Dab Genius, users are able to:
  0. Create an account / sign up or sign in with Facebook.
  0. Upload lyrics and images for their favorite songs.
  0. Create annotations on lyrics of existing songs that let the user express their interpretation of those lines.
  0. Upvote and downvote annotations if they agree or disagree with it.
  0. Comment on annotations.
  0. Search for existing songs by title.

## Features & Implementation

#### Single Page Application

What does this mean? It means that when exploring throughout the application, there are never hard redirections or refreshes to the page in order to fetch new content to display to the user. This is all handled by the React Router; visiting different pages gives the router a variety of details about what to reveal to the user. This allows for seamless transitions for the user as he/she is navigating.

#### User Authentication

In order to have access to the different features on Dab Genius, users must be logged in; they have two options when creating an account. The first, is the old fashioned username and password creation. This is handled in the Rails backend which utilizes the `BCrypt` gem; the gem creates a hashed version of the user's password, stored as a password digest, which ensures the safety of the user's account. Clicking on the `sign in` or `sign up` presents the user with a session form that utilizes modals.

Alternatively, users can also sign in with their Facebook credentials if they choose to use the Facebook OmniAuth path. Dab Genius extracts the user's name and saves it as the username for when users construct annotations and comments.

![signup]

#### Songs

The database maintains all of its songs in a table which stores its `artist`, `title`, `lyrics`, and `author_id`. Users have the ability to upload new songs onto the website and attach a cover art with it. Images that users upload along with their lyrics maintained with the `Paperclip` gem which stores them via Amazon Web Services. `Figaro` is also used in order to store the necessary access keys to access those images. The homepage holds an index which allows the users to view all of songs in the database. Users also have the ability to search for a song by its title using the search bar located in the header.

_song search_

```javascript
render() {
  let songs = [];
  let searchString = this.state.searchString.trim().toLowerCase();
  if (searchString.length > 0) {
    songs = this.props.songs.filter((song) => {
      return song.title.toLowerCase().match(searchString) || song.artist.toLowerCase().match(searchString);
    });
  }

    return (
      <div className="song-search">
        <input className="search-input" type="text" value={this.state.searchString} onChange={this.updateSearch}
          placeholder="Search for a song!"/>
        <ul>
          {songs.map((song) => {
            return(
              <SongSearchItem song={song} onClick={this.clearSearch} key={song.id}/>
            );
          })}
        </ul>
      </div>
    );
  }
```
_song search live_

![search]

#### Song Annotations

In the back end, the database keeps track of annotations in a table that keeps track of the annotation's `id`, its `author_id` and its `song_id`. In order to create an annotation, the logged in user drags over the lyrics on the song's individual page and writes its `body`. After submission, the annotation is added to the database and is immediately accessible upon completion. Clicking on existing annotations renders the body which allows its users to begin commenting.

_annotation button on lyrics selection_

![annotation-create]

#### Annotation Comments

After clicking on an annotation, the server fetches all of its associated comments. When viewing an annotation, the user is presented with a form that allows for commenting. Comments are added to the store and are instantly re-rendered onto the page. In the database, comments are stored in a table that links together its `author` and its `annotation`.

![annotation-vote]

#### Annotation Votes

Logged in users have the ability to upvote and downvote annotations by clicking on the _Dope_ and _Nope_ buttons respectively. In doing so, users can affect the scores, or `brain cells` indicated in the header. The number of `brain cells` a user has is determined by the number of annotations they create and the quality of those annotations as judged by other users. In the back end, the votes are maintained using Rails' `find_or_create_by` method that will find the user's existing vote on a particular annotation and update it, or create one if they had not voted on it previously. By doing this, the database ensures that a user cannot vote on a single annotation more than once, but can update his/her vote if there is a change of heart.

[signup]: ./app/assets/images/login.gif
[search]: ./app/assets/images/search.gif
[annotation-create]: ./app/assets/images/annotation.gif
[annotation-vote]: ./app/assets/images/vote.gif

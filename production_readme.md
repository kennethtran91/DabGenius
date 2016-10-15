# Dab Genius

[Dab Genius live][heroku]

[heroku]: https://dab-genius.herokuapp.com/

Rap Genius inspired `Dab Genius` is a full-stack web application that that incorporates:
  0. Ruby on Rails
  0. FaceBook's React.js
  0. Redux
  0. PostgreSQL

## Features

### Songs

The database maintains all of its songs in a table which stores its
  0. artist
  0. title
  0. lyrics
  0. author (user who uploaded)

Users have the ability to upload new songs onto the website and attach a cover art with it. 

### Song Annotations

In the back end, the database keeps track of annotations in a table that keeps track of the annotation's `id`, its `author_id` and its `song_id`. In order to create an annotation, the logged in user drags over the lyrics on the song's individual page and writes its `body`. After submission, the annotation is added to the database and is immediately accessible upon completion. Clicking on existing annotations renders the body which allows its users to begin commenting.

### Annotation Comments

After clicking on an annotation, the server fetches all of its associated comments. When viewing an annotation, the user is presented with a form that allows for commenting. Comments are added to the store and are instantly re-rendered onto the page. In the database, comments are stored in a table that links together its `author` and its `annotation`.

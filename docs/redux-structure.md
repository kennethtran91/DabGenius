# Redux Structure

This file serves to allow you to follow the sequence of events, starting from invocation of the action to completion.
You should be able to see the involvement of middlewares and reducers as you move along.

## Authorization

### Request actions

  * `signIn`
    0. invoked from the `signInForm` `onSubmit`.
    0. calls `POST /api/session`.
    0. has `receiveCurrentUser` as its callback.

  * `signUp`
    0. invoked from the `signUpForm` `onSubmit`.
    0. calls `POST /api/users`.
    0. has `receiveCurrentUser` as its callback.

  * `logout`
    0. invoked from the `header` `onClick`.
    0. calls `DELETE /api/session`.
    0. has `deleteCurrentUser` as its callback.

### Response actions

  * `receiveCurrentUser`
    0. invoked by an API callback.
    0. adds the `currentUser` into the application's state via the `SessionReducer`.

  * `deleteCurrentUser`
    0. invoked by an API callback.
    0. deletes the `currentUser` from the application's state via `SessionReducer`.

## Errors

### Error response actions

  * `setErrors`
    0. invoked by an API callback when invalid information is submitted.
      0. this can include invalid credentials, missing data fields in song submission.
    0. adds the `errors` into the application state via the `ErrorReducer`.

  * `clearErrors`
    0. invoked by an API callback when valid information is submitted.
    0. clears the `errors` from the application state via the `ErrorReducer`.

## Songs

### Song request actions

  0. `fetchAllSongs`
    0. invoked by `SongIndex`.
    0. calls `GET /api/songs`.
    0. has `receiveAllSongs` as its callback.

  0. `fetchOneSong`
    0. invoked by `SongDetail`.
    0. calls `GET /api/songs/:id`.
    0. has `receiveOneSong` as its callback.

  0. `deleteSong`
    0. invoked by delete song button `onClick`.
    0. calls `DELETE /api/songs/:id`.
    0. has `removeSong` as its callback.

  0. `createSong`
    0. invoked by `newSongForm` on submit.
    0. calls `POST /api/songs`.
    0. has `receiveOneSong` as its callback.

### Song response actions

  0. `receiveAllSongs`
    0. invoked by an API callback.
    0. adds all songs to the application's state via the `SongsReducer`.

  0. `receiveOneSong`
    0. invoked by an API callback.
    0. adds the requested song to the application's state via the `SongsReducer`.

  0. `removeSong`
    0. invoked by an API callback.
    0. removes the requested song from the application's state via the `SongsReducer`.

## Annotations

### Annotation request actions

  0. `fetchLyricAnnotations`
    0. invoked by `annotationDetail` `onClick`.
    0. calls `GET /api/songs/:id/annotations`.
    0. has `receiveLyricAnnotations` as its callback.

  0. `createAnnotation`
    0. invoked by `newAnnotationForm` on submit.
      0. form displayed when button is clicked to add annotation
        0. triggered on highlight of lyrics.
    0. calls `POST /api/songs/:id/annotations`.
    0. has `receiveOneAnnotation` as its callback.

### Annotation response actions

  0. `receiveLyricAnnotations`
    0. invoked by an API callback.
    0. adds all annotations for the selected song lyrics to the application's state via the `AnnotationsReducer`.

  0. `receiveOneAnnotation`
    0. invoked by an API callback.
    0. adds new annotation for the selected song lyrics to the application's state via the `AnnotationsReducer`.

## Comments

### Comment request actions

  0. `fetchAnnotationComments`
    0. invoked when `fetchLyricAnnotations` is invoked.
    0. calls `GET /api/songs/:id/annotations/:id`.
    0. has `receiveAnnotationComments` as its callback.

  0. `createComment`
    0. invoked by `newCommentForm` on submit.
    0. calls `POST /api/songs/:id/annotations/:id/`.
    0. has `receiveAnnotationComment` as its callback.

### Comment response actions

  0. `receiveAnnotationComments`
    0. invoked by an API callback.
    0. adds all comments for the current annotation to the application's state via the `CommentsReducer`.

  0. `receiveAnnotationComment`
    0. invoked by an API callback.
    0. adds the new for the current annotation to the application's state via the `CommentsReducer`.

## Votes

### Vote request actions

  0. `fetchAnnotationVotes`
    0. invoked when `fetchLyricAnnotations` is invoked.
    0. calls `GET /api/songs/:id/annotations/:id/votes`.
    0. has `receiveAnnotationVotes` as its callback.

  0. `upvoteAnnotation`
    0. invoked by upvote button `onClick`.
    0. calls `PATCH /api/songs/:id/annotations/:id/votes`.
    0. has `increaseAnnotationVotes` as its callback.

  0. `downvoteAnnotation`
    0. invoked by downvote button `onClick`.
    0. calls `PATCH /api/songs/:id/annotations/i:id/votes`.
    0. has `decreaseAnnotationVotes` as its callback.

### Vote response actions

  0. `receiveAnnotationVotes`
    0. invoked by an API callback.
    0. adds the vote score for the current annotation to the application's state via the `VotesReducer`.

  0. `increaseAnnotationVotes`
    0. invoked by an API callback.
    0. increases the current annotation's vote score in the application's state via the `VotesReducer`.

  0. `decreaseAnnotationVotes`
    0. invoked by an API callback.
    0. decreases the current annotation's vote score in the application's state via the `VotesReducer`.

## Song Search

### Song request actions

  0. `fetchSearchSuggestions`
    0. invoked by search bar input `onChange`.
    0. calls `GET /api/songs` with a `query` parameter.
    0. has `receiveSearchSuggestions` as its callback.


### Song response actions

  0. `receiveSearchSuggestions`
    0. invoked by an API callback.
    0. adds a list of matched songs to the application's state via the `SearchReducer`.

  0. `clearSearchSuggestions`
    0. invoked by search bar with no input.
    0. clears the list of matched songs in application's state via the `SearchReducer`.

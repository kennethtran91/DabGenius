# Component Hierarchy

## AuthForm Container
  0. username
  0. password
  0. errors
  0. session token
  0. log in
  0. sign up
  0. current user

## Search container
  0. Search bar
  0. Search results

## Home container
  0. Navigation bar
  0. Song index
    0. Top song
      0. Song box
    0. New Release
      0. Song box *
    0. What's hot?
      0. Large song box
      0. Medium song box * 4
      0. Small song box * 3-5

  0. About
    0. Description

## Footer container
  0. Links to profiles
    0. Github
    0. LinkedIn
    0. Email

### Song Box
  0. Album image
  0. Song title
  0. Song description

## Song Container
  0. Album cover banner
  0. Album cover actual
    0. Play button ?
    0. Song controller (Progress/Volume) ?
  0. Lyrics
  0. New Song

## Annotation Container
  0. Body
  0. Vote buttons
  0. Score
  0. Comments
  0. Submission form

## Comment Container
  0. Author
  0. Body

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/song/:id" | "SongContainer" |
| "/new-song" | "SongContainer" |
| "/annotations/:id" | "AnnotationContainer" |
| "/annotations/new" | "AnnotationContainer" |
| "/annotations/:id/comments/new" | "CommentContainer" |
| "/annotations/:id/comments/id" | "CommentContainer" |

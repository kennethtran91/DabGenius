# Dab Genius

[Heroku Link][heroku]

[heroku]: https://dab-genius.herokuapp.com/

## Description:
Dab Genius is a web application that allows its users to annotate their
favorite songs and share their thoughts with the world. By the end of week 9, `Dab Genius` will satisfy the following:

### Minimum Viable Product:
  1. Hosting on Heroku
  2. Account creation/login as well as demo login
  3. Production README.md
  4. Songs
  5. Annotations
  6. Comments
  7. Upvotes

## Documentation:
* [Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[redux-structure]: rdocs/edux-structure.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend server and front end user authentication established (2 days)
**Objective**: Rails server up and running with functioning front end authentication
  - [✓] New rails project
  - [✓] `User` model/controller
  - [✓] `Session` controller
  - [✓] Backend authentication
  - [✓] `StaticPages` controller and root view
  - [✓] Webpack and `React`/`Redux` modules
  - [✓] `APIUtil` for API interaction
  - [✓] Redux cycle established for front end authentication
  - [✓] Account creation/sign in established
  - [ ] OAuth with Facebook (move to later date)
  - [✓] Seed users (3)
  - [ ] Review Phase 1

### Phase 2: Create header/navigation and footer bars, homepage styling (1 day)
**Objective**: Begin designing homepage layout with navigation bar and page coloring
  - [✓] Navigation bar
  - [✓] Logo
  - [✓] Add search bar (currently non-functional)
  - [✓] Links in footer (1)
  - [✓] About info (need to develop)
  - [ ] Review phase 2

### Phase 3: Songs (1.5 days)
**Objective**: Add songs to the database.
  - [✓] `Song` model/controller
  - [✓] Seed songs (3)
  - [✓] Song form (currently nonfunctional)
  - [✓] File upload
  - [✓] Styling
  - [ ] Review phase 3

### Phase 4: Annotations (2 days)
**Objective**: Add ability to annotate songs.
  - [ ] `Annotation` model/controller
  - [ ] Seed annotations
  - [ ] Annotation form
  - [ ] onDrag(?) listeners to lyrics
  - [ ] Styling
  - [ ] Review phase 4

### Phase 5: Comments (1 day)
**Objective**: Add ability to comment on annotations.
  - [ ] `Comment` model/controller
  - [ ] Seed comments
  - [ ] Comments form
  - [ ] Styling
  - [ ] Review phase 5

### Phase 6: Votes (.5 day)
**Objective**: Add ability to vote on annotations.
  - [ ] `Vote` model/controller
  - [ ] Seed votes
  - [ ] Vote buttons
  - [ ] Review phase 6

### Phase 7: Search bar (1 day)
**Objective**: Add ability for users to search for songs based on title or artist.
  - [ ] Fetching songs from search
  - [ ] Dynamic search results
  - [ ] Review phase 7

### Bonus Features
  - [ ] Add song player so they can listen as they read the lyrics
  - [ ] Allow users to create own tracks

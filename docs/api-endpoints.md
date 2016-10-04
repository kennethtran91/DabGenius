# API Endpoints

## HTML API

### Root

  * `GET /` - Application home page

## JSON API

### Users

  * `POST /api/users` - sign up

### Session

  * `POST /api/session`
  * `DELETE /api/session`

### Songs

  * `GET /api/songs`
  * `POST /api/songs`
  * `GET /api/songs/:id`
  * `DELETE /api/songs/:id`
  * `PATCH /api/songs/:id`

### Annotations

  * `GET /api/annotations`
  * `GET /api/annotations/:id`
  * `POST /api/annotations`

### Comments

  * `GET /api/annotations/:id/comments`
  * `POST /api/annotations/:id/comments`

### Votes

  * `GET /api/annotations/:id/votes`
  * `PATCH /api/annotations/:id/votes`

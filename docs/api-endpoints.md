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

  * `GET /api/songs` - index
  * `POST /api/songs` - create
  * `GET /api/songs/:id/edit` - edit
  * `GET /api/songs/:id` - show
  * `PATCH /api/songs/:id` - update
  * `DELETE /api/songs/:id` - destroy

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

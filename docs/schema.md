# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## songs

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
artist          | string    | not null, indexed
title           | string    | not null, indexed
lyrics          | text      | not null
author_id       | integer   | not null

## annotations

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null
song_id         | integer   | not null, indexed
start_index     | integer   | not null
end_index       | integer   | not null


## comments

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null
annotation_id   | integer   | not null, indexed
body            | text      | not null

# votes

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null
score           | integer   | not null, default: 0
annotation_id   | integer   | not null

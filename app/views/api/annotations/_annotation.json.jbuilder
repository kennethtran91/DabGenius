json.extract! annotation, :id, :song_id, :start_index, :end_index, :body
json.author annotation.author.username
json.comments annotation.comments do |comment|
  json.partial! "api/comments/comment", comment: comment
end

json.votes annotation.votes do |vote|
  json.value vote.value
  json.user vote.user
end

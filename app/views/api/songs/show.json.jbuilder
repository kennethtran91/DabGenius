json.partial! "api/songs/song", song: @song
json.annotations @song.annotations do |annotation|
  json.partial! "api/annotations/annotation", annotation: annotation
end

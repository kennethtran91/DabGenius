json.array! @annotations do |annotation|
  json.body annotation.body
  json.author annotation.author.username
end

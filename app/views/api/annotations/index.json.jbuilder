json.array! @annotations do |annotation|
  json.body annotation.body
  json.author annotation.author.username
  json.id annotation.id
end

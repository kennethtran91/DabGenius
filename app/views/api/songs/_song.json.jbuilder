json.extract! song, :id, :artist, :title, :lyrics, :author_id
json.image_url asset_path(song.image.url)

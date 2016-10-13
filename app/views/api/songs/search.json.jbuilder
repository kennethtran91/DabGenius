json.array!(@songs) do |song|
  json.(song, *Song.column_names)
end

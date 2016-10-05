class Song < ActiveRecord::Base
  validates :artist, :title, :lyrics, :author, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

  
end

class Song < ActiveRecord::Base
  validates :artist, :title, :lyrics, :author, presence: true

  has_attached_file :image, default_url: "panda.jpg"

  validates_attachment_content_type(:image,
  content_type: /\Aimage\/.*\Z/)

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: "User"

end

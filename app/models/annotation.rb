class Annotation < ActiveRecord::Base
  validates :author, :song, :start_index, :end_index, presence: true

  belongs_to :song,
    primary_key: :id,
    foreign_key: :song_id,
    class_name: 'Song'

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :comments,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: 'Comment'
end

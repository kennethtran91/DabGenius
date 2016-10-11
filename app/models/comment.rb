class Comment < ActiveRecord::Base
  validates :author, :annotation, :body, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :annotation,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: 'Annotation'
end

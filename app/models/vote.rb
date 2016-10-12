class Vote < ActiveRecord::Base
  validates :user, :annotation, :value, presence: true
  validates :user_id, uniqueness: {scope: :annotation_id}

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :annotation,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: 'Annotation'

end

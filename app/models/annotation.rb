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

  has_many :votes,
    primary_key: :id,
    foreign_key: :annotation_id,
    class_name: 'Vote'

  def updateVote(user, score)
    vote = votes.find_or_create_by(user: user)
    vote.value = score
    vote.save!
  end

end

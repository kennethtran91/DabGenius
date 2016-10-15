class User < ActiveRecord::Base

  attr_reader :password

	validates :username, :session_token, presence: true
	validates :username, uniqueness: true
	validates :password, length: {in: 6..20}, allow_nil: :true

	after_initialize :ensure_session_token

  has_many :songs,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Song'

  has_many :annotations,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Annotation'

  has_many :comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Comment'

  has_many :votes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: 'Vote'

  def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_initialize.tap do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.username = auth.info.name
      user.save!
    end
  end



  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

	def password_is?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

  def score
    base_score = annotations.length * 5
    anno_scores = 0
    annotations.each do |anno|
      anno_scores += anno.score
    end
    base_score + anno_scores + 100
  end

	private

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end

end

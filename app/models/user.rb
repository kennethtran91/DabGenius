class User < ActiveRecord::Base

  attr_reader :password

	validates :username, :password_digest, :session_token, presence: true
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

  def self.generate_session_token
		SecureRandom.urlsafe_base64(16)
	end

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
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

	private

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end

end

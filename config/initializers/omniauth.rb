OmniAuth.config.logger = Rails.logger
OmniAuth.config.full_host = Rails.env.production? ? 'https://dab-genius.herokuapp.com/' : 'http://localhost:3000'
require 'bundler/setup'
require 'omniauth-facebook'

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['321727728194847'], ENV['a7963fc1790bf57e4c13325566a2b3ac'],
    info_fields: 'name', display: 'popup'
end

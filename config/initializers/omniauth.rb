OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '321727728194847', 'a7963fc1790bf57e4c13325566a2b3ac',
    info_fields: 'name', display: 'popup'
end

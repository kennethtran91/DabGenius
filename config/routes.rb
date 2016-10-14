Rails.application.routes.draw do
  root 'static_pages#root'
  # get '/auth/facebook/callback', to: 'sessions#create', defaults: {format: :json}
  match 'auth/:provider/callback', to: 'api/sessions#omni_create', via: [:get, :post]
  match 'auth/failure', to: redirect('/'), via: [:get, :post]
  match 'logout', to: 'sessions#destroy', as: 'logout', via: [:get, :post]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :new, :create, :edit, :show, :update, :destroy] do
      resources :annotations, only: [:index]
    end
    resources :annotations, only: [:show, :create, :destroy] do
      member do
        post :upvote
        post :downvote
      end
      resources :comments, only: [:index, :create]
    end
  end
end

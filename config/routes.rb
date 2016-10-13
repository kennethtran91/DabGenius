Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    get '/auth/facebook/callback', to: 'sessions#create'
    
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

Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :new, :create, :edit, :show, :update, :destroy] do
      resources :annotations, only: [:index]
    end
    resources :annotations, only: [:show, :create, :destroy]
  end
end

Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos 
    resources :likes, only: [:index, :create, :destroy]
    resources :comments, only: [:create, :destroy] #Add update?
  end

  # namespace :api do
  #   resource :user, only: [:create]
  #   resource :session, only: [:create, :destroy]
  #   resources :videos 
  # end
  
end

Rails.application.routes.draw do
  resources :items
  resources :collections
  resources :comments
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

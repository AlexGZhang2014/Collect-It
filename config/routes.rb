Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :reviews
      resources :items
      resources :collections
      resources :comments
      resources :posts
      resources :likes
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
end

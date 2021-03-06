Rails.application.routes.draw do
  namespace :api do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'api/auth/registrations'
    }
    namespace :auth do
      resources :sessions, only: [:index]
    end

    resources :bikes, only: [:index, :create, :edit, :update]
  end
end
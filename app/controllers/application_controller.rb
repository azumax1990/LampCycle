class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::Helpers

  skip_before_action :verify_authenticity_token, if: :devise_controller?
  helper_method :current_user, :user_signed_in?
end

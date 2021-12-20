class Api::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController

  private
  def sign_up_params
      params.permit(:email, :password, :password_confirmation, :name, :phone_number, :post_code, :address, :building_name)
  end
end
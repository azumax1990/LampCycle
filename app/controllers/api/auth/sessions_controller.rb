class Api::Auth::SessionsController < ApplicationController
  def index
    if current_api_user
      render json: { user: current_api_user }
    else
      render json: { message: "ユーザーが存在しません" }
    end
  end
end
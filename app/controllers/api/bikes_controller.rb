class Api::BikesController < ApplicationController

  def index
    bikes = Bike.all
    render json: bikes
  end
  
  def create
    bike.create(bike_params)
    render json: { status: "ok", error_message: bike.errors }
  end

  def edit
    bike = Bike.find(param[:id])
    render json: bike
  end

  def update
    bike = Bike.find(param[:id])
    bike.update(bike_params)
    render json: { status: "ok" }
  end

  private
  def bike_params
    params.require(:bike).permit(:name, :maker, :weight, :lent_out)
  end
end
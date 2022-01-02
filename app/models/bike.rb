class Bike < ApplicationRecord
  include Rails.application.routes.url_helpers
  enum maker: { HONDA: 0, KAWASAKI: 1, YAMAHA: 2, SUZUKI: 3 }
  enum weight: { "50 ~ 125": 0, "125 ~ 400": 1, "400 ~ 750": 2, "750 ~ 1250": 3 }
  
  validates :name, presence: true
  validates :maker, presence: true
  validates :weight, presence: true

  has_one_attached :image

  def image_url
    image.attached? ? url_for(image) : nil
  end
end

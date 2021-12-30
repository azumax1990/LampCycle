class Bike < ApplicationRecord
  include Rails.application.routes.url_helpers

  validates :name, presence: true
  validates :maker, presence: true
  validates :weight, presence: true
  validates :lent_out, presence: true

  has_one_attached :image

  def image_url
    image.attached? ? url_for(image) : nil
  end
end

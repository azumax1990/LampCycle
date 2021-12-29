class Bike < ApplicationRecord

  validates :name, presence: true
  validates :maker, presence: true
  validates :weight, presence: true
  validates :lent_out, presence: true
end

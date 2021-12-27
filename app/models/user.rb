# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  VALID_EMAIL = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  VALID_PHONENUMBER = /\A\d{10}$|^\d{11}\z/
  VALID_POST_CODE = /\A\d{7}\z/

  validates :email, presence: true, uniqueness: true, format: { with: VALID_EMAIL }
  validates :name, presence: true
  validates :phone_number, presence: true, format: { with: VALID_PHONENUMBER }
  validates :post_code, presence: true, format: { with: VALID_POST_CODE }
  validates :address, presence: true
end

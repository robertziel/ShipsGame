class User < ActiveRecord::Base
  has_one :game, dependent: :destroy
  has_one :inverse_games, :class_name => "Game", :foreign_key => "enemy_id", dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end

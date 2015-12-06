class Game < ActiveRecord::Base
  belongs_to :user
  belongs_to :enemy, :class_name => "User"

end

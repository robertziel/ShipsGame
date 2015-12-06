module GamesHelper
  def hasGame
    !current_user.game
  end

end

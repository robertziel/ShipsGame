module GamesHelper
  def hasGame
    !current_user.game
  end

  def ifBelongstoActiveGame(userId)
    Game.where("(user_id=? or enemy_id=?) and accepted=?", userId, userId, true).take
  end
end

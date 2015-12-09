module GamesHelper
  def hasGame
    !current_user.game
  end

  def ifBelongstoActiveGame(userId)
    Game.where("(user_id=? or enemy_id=?) and accepted=?", userId, userId, true).take
  end

  def toBoard(arr)
    newArr = []
    [0,1,2,3,4,5,6,7,8,9].each do |x|
      newArr[x] = arr[x * 10, 10]
    end
    return newArr
  end
end

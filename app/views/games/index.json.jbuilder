json.array!(@games) do |game|
  json.extract! game, :id, :user_id, :enemy_id, :accepted, :userboard, :enemyboard
  json.url game_url(game, format: :json)
end

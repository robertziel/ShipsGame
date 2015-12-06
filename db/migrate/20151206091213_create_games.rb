class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_id
      t.integer :enemy_id
      t.boolean :accepted, default: false
      t.text :userboard, array: true, default: []
      t.text :enemyboard, array: true, default: []

      t.timestamps null: false
    end
  end
end

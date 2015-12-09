class AddReadyUserAndWhoToGame < ActiveRecord::Migration
  def change
    add_column :games, :readyuser, :boolean, default: false
    add_column :games, :readyenemy, :boolean, default: false
    add_column :games, :who, :boolean
  end
end

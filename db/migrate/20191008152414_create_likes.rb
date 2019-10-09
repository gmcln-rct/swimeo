class addLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end
    add_index :likes, :user_id
    add_index :likes, :video_id
  end
end

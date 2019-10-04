class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :creator_id, null: false

      t.timestamps
    end

    add_index :videos, :title, unique: true
    add_index :videos, :creator_id
  end
end

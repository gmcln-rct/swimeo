class UpdateVideos < ActiveRecord::Migration[5.2]
  def change

  end
  add_column :videos, :thumbnail, :string
end
  
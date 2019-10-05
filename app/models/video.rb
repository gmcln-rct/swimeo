class Video < ApplicationRecord

  has_one_attached :video_url

  validates :title, :description, :creator_id, presence: true
  validates :title, uniqueness: true

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: 'User'


end

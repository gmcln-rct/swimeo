class Video < ApplicationRecord

  has_one_attached :video_url

  has_one_attached :image_url

  validates :title, :description, :creator_id, presence: true
  validates :title, uniqueness: true

  belongs_to :user,
    foreign_key: :creator_id,
    class_name: 'User'

  has_many :likes,
    foreign_key: :video_id,
    class_name: 'Like'

  has_many :comments,
    foreign_key: :video_id,
    class_name: 'Comment'

end

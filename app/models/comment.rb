class Comment < ApplicationRecord
  validates :body, :user_id, :video_id, presence: true

  belongs_to :user

  belongs_to :video

end

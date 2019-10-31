json.extract! @comment, :id, :body, :user_id, :video_id

json.first_last_name @comment.user.first_last_name


json.video do 
    json.extract! @video, :id, :title, :description
    json.video_url url_for(@video.video_url)
    json.likes @video.likes.pluck(:id)
    json.liked_by_current_user !!@video.likes.find_by(user_id: current_user.id)
end

json.likes do 
    @video.likes.each do |like|
        json.set! like.id do
            json.extract! like, :user_id, :video_id
        end
    end
end
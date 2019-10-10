json.video do 
    json.extract! @video, :id, :title, :description
    json.video_url url_for(@video.video_url)
    json.likes @video.likes.pluck(:id)
    json.comments @video.comments.pluck(:id)
end

json.likes do 
    if @video.likes.present?
        @video.likes.each do |like|
            json.set! like.id do
                json.extract! like, :user_id, :video_id
            end
        end
    else
        json.null!
    end
end

json.comments do 
    if @video.comments.present?
        @video.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :user_id, :video_id, :body
            end
        end
    else
        json.null!
    end
end
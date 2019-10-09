json.video do 
    json.extract! @video, :id, :title, :description
    json.video_url url_for(@video.video_url)
    json.likes @video.likes.pluck(:id)
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
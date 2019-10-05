json.array! @videos do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :creator_id
        json.video_url url_for(video.video_url)
    end
end


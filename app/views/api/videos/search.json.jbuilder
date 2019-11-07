json.array! @videos do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :creator_id, :thumbnail
        json.video_url url_for(video.video_url)
        json.image_url video.image_url.attached? ? url_for(video.image_url) : ""

        json.likes video.likes.pluck(:id)
    end
end


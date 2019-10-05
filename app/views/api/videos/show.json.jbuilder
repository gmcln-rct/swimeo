json.extract! @video, :id, :title, :description
json.video_url url_for(@video.video_url)



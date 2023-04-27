json.extract! video, :id, :video_title, :video_url, :video_description, :iframe, :created_at, :updated_at
json.url video_url(video, format: :json)

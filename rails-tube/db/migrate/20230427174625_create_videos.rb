class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :video_title
      t.string :video_url
      t.text :video_description
      t.text :iframe

      t.timestamps
    end
  end
end

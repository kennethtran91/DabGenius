class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :artist, null: false
      t.string :title, null: false
      t.text :lyrics, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :songs, :artist
    add_index :songs, :title
  end
end

class AddColumnsToComments < ActiveRecord::Migration
  def change
    add_column :comments, :author_id, :integer
    add_column :comments, :annotation_id, :integer
    add_column :comments, :body, :string
    add_index :comments, :annotation_id
  end
end

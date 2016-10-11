class AddNullConstraintToComments < ActiveRecord::Migration
  def change
    change_column :comments, :author_id, :integer, null: false
    change_column :comments, :annotation_id, :integer, null: false
    change_column :comments, :body, :text, null: false
  end
end

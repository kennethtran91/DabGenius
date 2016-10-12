class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :value, null: false, default: 0
      t.integer :annotation_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end

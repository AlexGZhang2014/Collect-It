class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :content
      t.string :author
      t.integer :rating
      t.integer :collection_id

      t.timestamps
    end
  end
end

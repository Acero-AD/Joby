class CreatePositions < ActiveRecord::Migration[8.1]
  def change
    create_table :positions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :url, null: false
      t.string :status, null: false, default: "bookmarked"

      t.timestamps
    end
  end
end

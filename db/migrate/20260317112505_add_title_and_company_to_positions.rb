class AddTitleAndCompanyToPositions < ActiveRecord::Migration[8.1]
  def change
    add_column :positions, :title, :string
    add_column :positions, :company, :string
  end
end

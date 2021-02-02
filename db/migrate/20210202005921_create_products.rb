class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :title
      t.references :user, null: false, foreign_key: true
      t.string :description
      t.integer :type
      t.float :price

      t.timestamps
    end
  end
end

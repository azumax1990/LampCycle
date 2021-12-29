class CreateBikes < ActiveRecord::Migration[6.0]
  def change
    create_table :bikes do |t|
      t.string :name, null: false
      t.string :maker, null: false
      t.string :weight, null: false
      t.boolean :lent_out, null: false, default: false 
      t.timestamps
    end
  end
end

class CangeDataMakerToBike < ActiveRecord::Migration[6.0]
  def change 
    change_column :bikes, :maker, :integer
  end
end

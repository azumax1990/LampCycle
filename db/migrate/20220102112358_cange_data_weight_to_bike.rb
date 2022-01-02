class CangeDataWeightToBike < ActiveRecord::Migration[6.0]
  def change
    change_column :bikes, :weight, :integer
  end
end

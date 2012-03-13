class CreateBuildingTypes < ActiveRecord::Migration
  def change
    create_table :building_types do |t|
      t.string :typename_cn, :null => false
      t.string :typename_en, :null => false
      t.string :title_image, :null => false
      t.string :intro_cn
      t.string :intro_en
      t.integer :weight, :default => 0

      t.timestamps
    end
  end
end

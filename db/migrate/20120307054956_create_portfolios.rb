class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
      t.string :name_en, :null => false
      t.string :name_cn, :null => false
      t.references :building_type
      t.string :cover_image
      t.string :title_image
      t.string :project_type_cn
      t.string :project_type_en
      t.date :begin_time
      t.date :end_time
      t.string :owner_cn
      t.string :owner_en
      t.string :location_cn
      t.string :location_en
      t.string :result_cn
      t.string :result_en
      t.string :detail_cn
      t.string :detail_en
      t.string :lang_switch
      t.integer :weight, :default => 0
      t.string :cons_square_cn
      t.string :cons_square_en
      t.string :plan_square_cn
      t.string :plan_square_en
      t.string :cocompany_cn
      t.string :cocompany_en
      t.string :pno

      t.timestamps
    end

    add_index :portfolios, :building_type_id
  end
end
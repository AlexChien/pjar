class CreateSites < ActiveRecord::Migration
  def change
    create_table :sites do |t|
      t.text :about_us_cn
      t.text :about_us_en
      t.text :contact_us_cn
      t.text :contact_us_en
      t.text :join_us_cn
      t.text :join_us_en

      t.timestamps
    end
  end
end

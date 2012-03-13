class CreateWorkImages < ActiveRecord::Migration
  def change
    create_table :work_images do |t|
      t.integer :portfolio_id
      t.string :title_cn
      t.string :title_en
      t.string :desc_cn
      t.string :desc_en
      t.string :old_small_size
      t.string :old_large_size

      t.timestamps
    end

    add_index :work_images, :portfolio_id
  end
end
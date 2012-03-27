class ChangeDetailTypeToPortfolio < ActiveRecord::Migration
  def up
    change_column :portfolios, :detail_en, :text
    change_column :portfolios, :detail_cn, :text
  end

  def down
  end
end
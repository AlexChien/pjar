class ChangeTitleCoverImageFieldToOtherNames < ActiveRecord::Migration
  def up
    rename_column :portfolios, :title_image, :old_title_image
    rename_column :portfolios, :cover_image, :old_cover_image
  end

  def down
    rename_column :portfolios, :old_title_image, :title_image
    rename_column :portfolios, :old_cover_image, :cover_image
  end
end
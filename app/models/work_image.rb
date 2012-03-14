class WorkImage < ActiveRecord::Base
  belongs_to :portfolio, :inverse_of => :work_images

  has_translation :title, :desc

  has_attached_file :image,
    :url => "/system/images/:attachment/:id/:style/:filename",
    :path => ":rails_root/public/system/images/:attachment/:id/:style/:filename",
    :styles => {:thumb => "120x120#", :standard => "600x600#"}
  # handling delete in your model, if needed. Replace all image occurences with your asset name.
  attr_accessor :delete_image
  before_validation { self.image = nil if self.delete_image == '1' }

  def name
    "##{self[:id]}: #{self.title_cn}"
  end
end

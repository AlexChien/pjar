class Portfolio < ActiveRecord::Base
  belongs_to :building_type, :inverse_of => :portfolios
  has_many :work_images, :inverse_of => :portfolio

  scope :latest, order("begin_time desc").includes(:building_type)
  scope :by_type, lambda{ |type_id| latest.where("building_type_id = ?",type_id) }

  has_attached_file :title_image,
    :url => "/system/images/:attachment/:id/:style/:filename",
    :path => ":rails_root/public/system/images/:attachment/:id/:style/:filename",
    :styles => {:standard => "480x65#"}
  # handling delete in your model, if needed. Replace all image occurences with your asset name.
  attr_accessor :delete_title_image
  before_validation { self.title_image = nil if self.delete_title_image == '1' }

  has_attached_file :cover_image,
    :url => "/system/images/:attachment/:id/:style/:filename",
    :path => ":rails_root/public/system/images/:attachment/:id/:style/:filename",
    :styles => {:standard => "500x500#"}
  # handling delete in your model, if needed. Replace all image occurences with your asset name.
  attr_accessor :delete_cover_image
  before_validation { self.cover_image = nil if self.delete_cover_image == '1' }


  has_translation :name, :project_type, :owner, :location, :result, :cocompany, :detail, :cons_square, :plan_square
end

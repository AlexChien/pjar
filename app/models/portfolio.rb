class Portfolio < ActiveRecord::Base
  belongs_to :building_type, :inverse_of => :portfolios
  has_many :work_images, :inverse_of => :portfolio

  scope :latest, order("begin_time desc").includes(:building_type)
  scope :by_type, lambda{ |type_id| latest.where("building_type_id = ?",type_id) }

  has_translation :name, :project_type, :owner, :location, :result, :cocompany, :detail, :cons_square, :plan_square
end

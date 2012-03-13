class BuildingType < ActiveRecord::Base
  has_many :portfolios, :inverse_of => :building_type
  has_translation :typename, :intro

  scope :weighted, order("weight desc")

end

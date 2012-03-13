class WorkImage < ActiveRecord::Base
  belongs_to :portfolio, :inverse_of => :work_images

  has_translation :title, :desc
end

class Site < ActiveRecord::Base
  has_translation :about_us, :contact_us, :join_us
end

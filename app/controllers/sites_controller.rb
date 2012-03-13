class SitesController < ApplicationController
  before_filter :get_site_data

  def about_us
  end

  def contact_us
  end

  def join_us
  end

  def cooperation
    redirect_to("http://www.iad.cc/")
  end

  def get_site_data
    @data = Site.find(1)
  end
end

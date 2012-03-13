class HomeController < ApplicationController
  def index
    @types = BuildingType.weighted
    render :layout => "home"
  end
end

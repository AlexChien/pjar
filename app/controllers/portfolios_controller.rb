class PortfoliosController < ApplicationController
  def index
    @portfolios = Portfolio.weighted.latest
  end

  def show
    @portfolio = Portfolio.find(params[:id], :include => [:building_type,:work_images])
    @type_id = @portfolio.try(:building_type).try(:id)
    @images = @portfolio.work_images
  end

  def by_type
    @type_id = params[:type_id]
    @portfolios = Portfolio.weighted.by_type(@type_id)

    respond_to do |format|
      format.html
      format.xml
    end
  end
end

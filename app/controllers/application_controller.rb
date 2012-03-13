class ApplicationController < ActionController::Base
  protect_from_forgery
  before_filter :set_locale

  def set_locale
    session[:locale] = params[:locale] if params[:locale]
    I18n.locale = session[:locale] || I18n.default_locale
    I18n.locale = I18n.locale.to_s.downcase.include?('zh') ? 'zh-CN' : 'en'
  end

  def render_403
    @project = nil
    render :template => "common/403", :layout => !request.xhr?, :status => 403
    return false
  end

  def render_404
    render :template => "common/404", :layout => !request.xhr?, :status => 404
    return false
  end

  def render_error(msg)
    flash.now[:error] = msg
    render :text => '', :layout => !request.xhr?, :status => 500
  end
end

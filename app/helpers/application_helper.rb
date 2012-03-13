module ApplicationHelper
  #DRY flash messages
  def flash_message
    messages = ""
    [:notice, :info, :warning, :error].each do|type|
      if flash[type]
        messages= "<div id=\"#{type}\">#{flash[type]}</div>"
      end
    end
    messages
  end

  def html_title(*args)
    if args.empty?
      title = ["Sitename"]
      title << @html_title if @html_title
      title.compact.join(' - ')
    else
      @html_title ||= []
      @html_title << args
    end
  end

  def html_keyword(*args)
    if args.empty?
      keyword = ["Sitename"]
      keyword << @html_keyword if @html_keyword
      keyword.compact.join(' - ')
    else
      @html_keyword ||= []
      @html_keyword << args
    end
  end

  def html_description(*args)
    if args.empty?
      description = ["Sitename"]
      description << @html_description if @html_description
      description.compact.join(' - ')
    else
      @html_description ||= []
      @html_description << args
    end
  end

  def switch_lang_url
    connector = request.path.include?("?") ? "&" : "?"
    locale = I18n.locale.to_s.downcase == 'en' ? "zh-CN" : "en"
    "#{request.path}#{connector}locale=#{locale}"
  end

  def current_section
    p = request.path
    if p.include?("sites")
      p.split("/").last
    elsif p.include?("portfolio")
      "portfolio"
    else
      "title"
    end
  end

  def nav_image_class(node)
    request.url.include?(node) ? "icon_arrow1_on.gif" : "icon_arrow1.gif"
  end

  def nav_class(node)
    request.url.include?(node) ? "nav_on" : "nav"
  end

  def subnav_image_class(node)
    current_subnav = @type_id || params[:action]
    # puts "#{@type_id}-#{current_subnav}-#{node}"
    current_subnav.to_s == node.to_s ? "icon_arrow2_on.gif" : "icon_arrow2.gif"
  end

  def subnav_class(node)
    current_subnav = @type_id || params[:action]
    current_subnav.to_s == node.to_s ? "nav2_on" : "nav2"
  end
end

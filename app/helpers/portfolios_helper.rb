module PortfoliosHelper
  def portfolio_duration(portfolio)
    # check if the project is still on going
    if portfolio.end_time.blank?
      raw "#{portfolio.begin_time.strftime('%Y-%m')}<span class='red'>*</span>"
    else
      raw "#{portfolio.begin_time.strftime('%Y-%m')} - #{portfolio.end_time.strftime('%Y-%m')}"
    end
  end

  def portfolio_desc_for_xml(p)
    desc = "#{p.location} #{portfolio_duration(p)}<br>"
    desc = "#{desc}#{cons_square_title(p)}: #{p.cons_square}<br>" if p.cons_square?
    desc = "#{desc}#{t('site.plan_square')}: #{p.plan_square}<br>" if p.plan_square?
    desc = "#{desc}#{t('site.owner')}: #{p.owner}<br>" if p.owner?
    desc = "#{desc}#{t('site.cocompany')}: #{p.cocompany}<br>" if p.cocompany?
    desc = "#{desc}#{t('site.project_type')}: #{p.project_type}" if p.project_type?
    desc
  end

  def cons_square_title(p)
    p.building_type_id == 5 ? t("site.cons_square5") : t("site.cons_square")
  end

  def tilt_grid_setting(type_id)
    case type_id.to_i
    when 1
      {:row => 3, :column => 4}
    when 3
      {:row => 3, :column => 4}
    when 2
      {:row => 3, :column => 3}
    when 5
      {:row => 3, :column => 3}
    end
  end
end

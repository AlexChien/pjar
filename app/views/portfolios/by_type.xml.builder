xml = Builder::XmlMarkup.new(:indent =>2)
xml.instruct! :xml, :version=>"1.0", :encoding=>"UTF-8"
xml.tiltviewergallery do
  xml.photos do
    @portfolios.each do |p|
      xml.photo(:imageurl => "/images/portfolioimages/coverimages/#{p.cover_image}",
      :linkurl => portfolio_path(p)) do
        xml.title h(p.name)
        # xml.description "<![CDATA[#{raw portfolio_desc_for_xml(p)}]]>"
        xml.description "#{raw portfolio_desc_for_xml(p)}"
      end
    end
  end
end

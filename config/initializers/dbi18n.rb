class ActiveRecord::Base
  def self.has_translation(*attributes)
    attributes.each do |attribute|
      define_method "#{attribute}" do
        locale = I18n.locale.to_s.downcase.include?('zh') ? 'cn' : 'en'
        self.send "#{attribute}_#{locale}"
      end

      define_method "#{attribute}?" do
        locale = I18n.locale.to_s.downcase.include?('zh') ? 'cn' : 'en'
        self.send "#{attribute}_#{locale}?"
      end
    end
  end
end
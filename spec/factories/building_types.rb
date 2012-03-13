# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :building_type do
    typename_cn "MyString"
    typename_en "MyString"
    title_image "MyString"
    intro_cn "MyString"
    intro_en "MyString"
    weight 1
  end
end

# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :site do
    about_us_cn "MyText"
    about_us_en "MyText"
    contact_us_cn "MyText"
    contact_us_en "MyText"
    join_us ""
    join_us_en "MyText"
  end
end

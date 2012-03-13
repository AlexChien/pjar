# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :work_image do
    portfolio_id 1
    title_cn "MyString"
    title_en "MyString"
    desc_cn "MyString"
    desc_en "MyString"
    old_small_size "MyString"
    old_large_size "MyString"
  end
end

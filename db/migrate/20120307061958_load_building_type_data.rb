class LoadBuildingTypeData < ActiveRecord::Migration
  def up
    execute <<-EOF
      insert into building_types (id, typename_cn, typename_en, title_image, intro_cn, intro_en, weight)
      values
      (1,"公共建筑","Public Building","20080819132514.jpg","剧院<br>商业设施<br>文化建筑<br>科研及办公建筑<br>高层超高层建筑","Theater. Commercial Facilites. Culture Buildings. Scientific Research and Office Building. High-rise and Super High-rise",4),
      (2,"住宅设计","Residential","20080819132439.jpg","独立住宅<br>别墅型住宅<br>城市居住实验住宅","Independent Residential. Villas. Urban Residential",2),
      (3,"规划设计","Urban Planning","20080819132428.jpg","新城(区)开发策划及设计<br>旧城(区)更新改造研究及设计","Development Strategy and Planning of New City. Research and Design of Renovating and Reconstrucing Old City",3),
      (5,"景观设计","Landscape","20080819132357.jpg","城市公共空间景观<br>公共空间艺术","Landscape. Art of Urban Public Space",1 );
    EOF
    execute "update building_types set created_at = '#{Time.now.to_s(:db)}', updated_at = '#{Time.now.to_s(:db)}'"
  end

  def down
    execute "delete from building_types"
  end
end

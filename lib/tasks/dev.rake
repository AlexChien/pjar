require 'fileutils'

namespace :dev do
  desc "Rebuild the system"
  task :build => ["tmp:clear", "log:clear", "db:reset", "db:setup"]

  desc "Generate fake data"
  task :fake => :environment do
    # TODO
  end

  desc "Run watchr"
  task :watchr do
    system("bundle exec watchr script/watchr.rb")
  end

  namespace :migration do
    desc "Migrate Portfolio Images"
    task :work_images => :environment do
      return
      source_path = "#{Rails.root}/public/images/portfolioimages"
      target_path = "#{Rails.root}/public/system/images/images/:id"
      WorkImage.all.each do |wi|
        id = wi[:id]
        old_large_image = wi[:old_large_size]
        old_thum_image = wi[:old_small_size]
        image_filename = old_large_image

        id_path = target_path.gsub(":id",id.to_s)
        puts id_path
        begin
          Dir.chdir(id_path)
        rescue
          puts "mkdirs:"
          puts id_path
          puts "#{id_path}/original"
          puts "#{id_path}/standard"
          puts "#{id_path}/thumb"
          Dir.mkdir(id_path)
          Dir.mkdir("#{id_path}/original")
          Dir.mkdir("#{id_path}/standard")
          Dir.mkdir("#{id_path}/thumb")
        end

        FileUtils.cp("#{source_path}/#{old_large_image}","#{id_path}/original/#{image_filename}")
        FileUtils.cp("#{source_path}/#{old_large_image}","#{id_path}/standard/#{image_filename}")
        FileUtils.cp("#{source_path}/#{old_thum_image}","#{id_path}/thumb/#{image_filename}")

        wi.update_attributes(:created_at => Time.now.to_s(:db),
            :image_file_name => image_filename,
            :image_content_type => "image/jpeg",
            :image_file_size => File.stat("#{source_path}/#{old_large_image}").size,
            :image_updated_at => Time.now.to_s(:db))

      end
    end

    desc "Migrate portfolio cover images"
    task :cover_images => :environment do
      return
      source_path = "#{Rails.root}/public/images/portfolioimages/coverimages"
      target_path = "#{Rails.root}/public/system/images/cover_images/:id"
      Portfolio.all.each do |wi|
        id = wi[:id]
        old_large_image = wi[:cover_image]
        image_filename = old_large_image

        id_path = target_path.gsub(":id",id.to_s)
        puts id_path
        begin
          Dir.chdir(id_path)
        rescue
          puts "mkdirs:"
          puts id_path
          puts "#{id_path}/original"
          puts "#{id_path}/standard"
          Dir.mkdir(id_path)
          Dir.mkdir("#{id_path}/original")
          Dir.mkdir("#{id_path}/standard")
        end

        FileUtils.cp("#{source_path}/#{old_large_image}","#{id_path}/original/#{image_filename}")
        FileUtils.cp("#{source_path}/#{old_large_image}","#{id_path}/standard/#{image_filename}")

        wi.update_attributes(
            :cover_image_file_name => image_filename,
            :cover_image_content_type => "image/jpeg",
            :cover_image_file_size => File.stat("#{source_path}/#{old_large_image}").size,
            :cover_image_updated_at => Time.now.to_s(:db))

      end
    end

    desc "Migrate portfolio title images"
    task :title_images => :environment do
      return
      source_path = "#{Rails.root}/public/images/portfolioimages/TitleImages"
      target_path = "#{Rails.root}/public/system/images/title_images/:id"
      Portfolio.all.each do |wi|
        id = wi[:id]
        old_large_image = wi[:title_image]
        image_filename = old_large_image

        id_path = target_path.gsub(":id",id.to_s)
        puts id_path
        begin
          Dir.chdir(id_path)
        rescue
          puts "mkdirs:"
          puts id_path
          puts "#{id_path}/original"
          puts "#{id_path}/standard"
          Dir.mkdir(id_path)
          Dir.mkdir("#{id_path}/original")
          Dir.mkdir("#{id_path}/standard")
        end

        FileUtils.cp("#{source_path}/#{old_large_image}","#{id_path}/original/#{image_filename}")
        FileUtils.cp("#{source_path}/#{old_large_image}","#{id_path}/standard/#{image_filename}")

        wi.update_attributes(
            :title_image_file_name => image_filename,
            :title_image_content_type => "image/jpeg",
            :title_image_file_size => File.stat("#{source_path}/#{old_large_image}").size,
            :title_image_updated_at => Time.now.to_s(:db))

      end
    end

  end
end
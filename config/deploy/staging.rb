set :application, "ccgexpo"
set :domain,      "69.164.193.254"
set :repository,  "git@github.com:AlexChien/ccgexpo.git"
set :use_sudo,    false
set :deploy_to,   "/var/local/www/#{application}"
set :scm,         "git"
set :user,        "runner"
set :runner,      "nobody"

# Whatever you set here will be taken set as the default RAILS_ENV value
# on the server. Your app and your hourly/daily/weekly/monthly scripts
# will run with RAILS_ENV set to this value.
set :rails_env, "production"

# NOTE: for some reason Capistrano requires you to have both the public and
# the private key in the same folder, the public key should have the
# extension ".pub".
ssh_options[:keys] = ["#{ENV['HOME']}/.ssh/id_rsa"]

set :scm, :git
set :scm_verbose, true
set :branch, "master"

set :deploy_via, :remote_cache

role :app, domain
role :web, domain
role :db,  domain, :primary => true

namespace :deploy do

  desc "Generate database.yml and Create asset packages for production, minify and compress js and css files"
  # after "deploy:update_code", :roles => [:web] do
  after "deploy:finalize_update", :roles => [:web] do
    # database_yml task cannot be put in after "deploy:update_code" trigger
    # it will conflict with asset:precompile
    database_yml
    # asset_packager
  end

  # add soft link script for deploy
  desc "Symlink the upload directories"
  after "deploy:symlink", :roles => [:web] do
    run "ln -s #{shared_path}/ckeditor_assets #{current_release}/public/ckeditor_assets"
    # symlink assets is done by capistrano interal task
    # run "ln -s #{shared_path}/assets #{current_release}/public/assets"
    # migrate
  end

  desc "Create asset packages for production, minify and compress js and css files"
  task :asset_packager, :roles => [:web] do
    # run "cd #{release_path}; RAILS_ENV=production rake assets:precompile"
  end

  task :start, :roles => :app do
    run "touch #{current_release}/tmp/restart.txt"
  end

  task :stop, :roles => :app do
    # Do nothing.
  end

  desc "Restart Application"
  task :restart, :roles => :app do
    run "touch #{current_release}/tmp/restart.txt"
  end


  desc "Generate Production database.yml"
  task :database_yml, :roles => [:web] do
    db_config = "#{shared_path}/config/database.yml.production"
    run "cp #{db_config} #{release_path}/config/database.yml"
  end

end
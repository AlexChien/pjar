set :application, "unplusdesign"
set :domain,      "69.164.193.254"
set :repository,  "git@github.com:AlexChien/pjar.git"
set :use_sudo,    false
set :deploy_to,   "/var/local/www/#{application}"
set :scm,         "git"
set :user,        "runner"
set :runner,      "nobody"
set :keep_releases, 5

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
    run "ln -s #{shared_path}/bundle #{current_release}/vendor/bundle"
    migrate
  end

  # add soft link script for deploy
  desc "Symlink the upload directories"
  after "deploy:symlink", :roles => [:web] do
    # bundle folder link
    # run "ln -s #{shared_path}/bundle #{current_release}/vendor/bundle"

    migrate
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
    puts "cp #{shared_path}/config/database.yml.production #{release_path}/config/database.yml"
    run "cp #{shared_path}/config/database.yml.production #{release_path}/config/database.yml"
  end

end
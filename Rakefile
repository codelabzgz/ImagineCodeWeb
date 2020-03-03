#############################################################################
#
# Modified version of jekyllrb Rakefile
# https://github.com/jekyll/jekyll/blob/master/Rakefile
#
#############################################################################

require 'rake'
require 'date'
require 'yaml'
require 'net/sftp'

CONFIG = YAML.load(File.read('_config.yml'))
USERNAME = CONFIG["username"]
REPO = CONFIG["repo"]
SOURCE_BRANCH = CONFIG["branch"]
COMPILED_DIR = CONFIG["destination"]
DEPLOY_DIR = ENV["deploy_dir"]
FTP_USER = ENV["ftp_user"]
FTP_PORT = ENV["ftp_port"]
FTP_HOST = ENV["ftp_server"]
FTP_PASS = ENV["ftp_pass"]

def ftp_files(prefixToRemove, sourceFileList, targetDir, hostname, username, password, port)
  Net::SFTP.start(hostname,username,:password=>password,:port=>port) do |ftp|
  begin
    puts "Creating dir #{targetDir}" 
    ftp.mkdir targetDir
  rescue 
    puts $!
  end
  sourceFileList.each do |srcFile|    
    if prefixToRemove
      targetFile = srcFile.pathmap(("%{^#{prefixToRemove},#{targetDir}}p")) 
    else
      targetFile = srcFile.pathmap("#{targetDir}%s%p")
    end
    begin
      puts "Creating dir #{targetFile}" if File.directory?(srcFile)
      ftp.mkdir targetFile if File.directory?(srcFile)
    rescue 
      puts $!
    end
    begin
      puts "Copying #{srcFile} -> #{targetFile}" unless File.directory?(srcFile)
      ftp.upload(srcFile, targetFile) unless File.directory?(srcFile)
    rescue 
      puts $!
    end
  end
  end
end

def check_destination
  unless Dir.exist? CONFIG["destination"]
    sh "git clone https://$GIT_NAME:$GH_TOKEN@github.com/#{USERNAME}/#{REPO}.git #{CONFIG["destination"]}"
  end
end

namespace :site do
  desc "Generate the site"
  task :build do
    check_destination
    sh "bundle exec jekyll build"
  end

  desc "Generate the site and serve locally"
  task :serve do
    check_destination
    sh "bundle exec jekyll serve"
  end

  desc "Generate the site, serve locally and watch for changes"
  task :watch do
    sh "bundle exec jekyll serve --watch"
  end

  desc "Generate the site and push changes to remote origin"
  task :deploy do
    # Detect pull request
    if ENV['TRAVIS_PULL_REQUEST'].to_s.to_i > 0
      puts 'Pull request detected. Not proceeding with deploy.'
      exit
    end

    # Configure git if this is run in Travis CI
    if ENV["TRAVIS"]
      sh "git config --global user.name $GIT_NAME"
      sh "git config --global user.email $GIT_EMAIL"
      sh "git config --global push.default simple"
    end

    # Generate the site
    sh "bundle exec jekyll build"

    if ENV["TRAVIS_BRANCH"] == "master"
      puts 'Detected master branch'
    elsif ENV["TRAVIS_BRANCH"] == "develop"
      puts 'Detected develop branch. Deploying to $deploy_dir'
      ftp_files($COMPILED_DIR, FileList["$COMPILED_DIR/**/*"], $DEPLOY_DIR, $FTP_HOST, $FTP_USER, $FTP_PASS, $FTP_PORT)
    end
  end
end
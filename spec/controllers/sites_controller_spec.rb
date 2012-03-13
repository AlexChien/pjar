require 'spec_helper'

describe SitesController do

  describe "GET 'about_us'" do
    it "returns http success" do
      get 'about_us'
      response.should be_success
    end
  end

  describe "GET 'contact_us'" do
    it "returns http success" do
      get 'contact_us'
      response.should be_success
    end
  end

  describe "GET 'join_us'" do
    it "returns http success" do
      get 'join_us'
      response.should be_success
    end
  end

end

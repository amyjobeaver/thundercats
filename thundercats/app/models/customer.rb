class Customer < ActiveRecord::Base

	has_one :order

	validates_presence_of :name, :phone, :address1, :city, :zip 
  validates_presence_of :state, length: { is: 2 }
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :create, uniqueness: true
  
end

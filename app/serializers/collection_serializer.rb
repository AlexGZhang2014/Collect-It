class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :owner, :created_at, :updated_at
  has_many :items
  has_many :reviews
end

class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :owner
  has_many :items
  has_many :reviews
end

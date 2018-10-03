class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :likes, :created_at, :updated_at
  has_many :comments
  has_many :likes
end

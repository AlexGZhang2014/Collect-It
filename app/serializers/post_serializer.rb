class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :created_at, :updated_at
  has_many :comments
end

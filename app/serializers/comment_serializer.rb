class CommentSerializer < ActiveModel::Serializer
  attributes :id, :author, :content, :created_at, :updated_at
  belongs_to :post
end

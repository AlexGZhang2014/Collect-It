class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author, :rating, :created_at, :updated_at
  belongs_to :collection
end

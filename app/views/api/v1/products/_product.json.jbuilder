json.extract! product, :id, :created_at, :updated_at, :description, :title
json.url product_url(product, format: :json)

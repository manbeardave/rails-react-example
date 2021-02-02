# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# 2.times do |i|
    User.create(email: "hines@mail.com", password: "password", password_confirmation: "password")
# end

User.all.each do |u|

    10.times do |i|
      u.products.create(title: "To Do Item #{i+1} for #{u.email}", description: "test description")
    end
end
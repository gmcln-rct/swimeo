# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Video.destroy_all

demoGuest = User.create!(
    first_last_name: 'demoguest',
    email: 'demo@demo.com',
    password: 'password'
)

demoVideo1 = Video.create!(
    title: 'Belly Flop',
    description: 'The best belly flop video ever',
    creator_id: 1
)

video1 = open('https://swimeo-seeds.s3.amazonaws.com/rain.mp4')
demoVideo1.video_url.attach(io: video1, filename: 'rain.mp4')
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
Like.destroy_all

ApplicationRecord.connection.reset_pk_sequence!("users")
ApplicationRecord.connection.reset_pk_sequence!("video")
ApplicationRecord.connection.reset_pk_sequence!("likes")

demoGuest = User.create!(
    first_last_name: 'demoguest',
    email: 'demo@demo.com',
    password: 'password'
)
seedUser1 = User.create!( first_last_name: "Billy Ocean", email: "billy@billy.com", password: "password" )
seedUser2 = User.create!( first_last_name: "Mary Pacific", email: "mary@mary.com", password: "password" )
seedUser3 = User.create!( first_last_name: "Willy Atlantic", email: "willy@willy.com", password: "password" )
seedUser4 = User.create!( first_last_name: "Sandra Arctic", email: "sandra@sandra.com", password: "password" )
seedUser5 = User.create!( first_last_name: "Andres Baltic", email: "andres@andres.com", password: "password" )


demoVideo1 = Video.create!(title: "Waterfall", description: "Beautiful natural scene of a waterfall flowing over rocks.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/1-waterfall.jpeg", creator_id: seedUser2.id )
demoVideo2 = Video.create!(title: "Water Drop on Surface", description: "Water drops can be so beautiful when hitting the surface of liquides.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/2-water-drops.jpeg", creator_id: seedUser5.id )
demoVideo3 = Video.create!(title: "Tide at night", description: "The rocky shore of Salvador, Brazil at night can be so pretty.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/3-tide.jpeg", creator_id: seedUser4.id )
demoVideo4 = Video.create!(title: "Ocean waves", description: "Watching the surface of the ocean can be so soothing. It's so blue and ocean-y.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/4-ocean-surface.jpeg", creator_id: seedUser5.id )
demoVideo5 = Video.create!(title: "Bubbles", description: "Bubbles are so beautiful, and so, so bubbly.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/5-bubbles.jpeg", creator_id: seedUser3.id )
demoVideo6 = Video.create!(title: "Fountains of Bellagio", description: "Every evening, the Bellagio fountain show takes place in front of the Bellagio Hotel. Much like an army of porpoises spewing water in the air, over 1,000 dancing streams are choreographed to music and lights, filling the quarter-mile-long lake in front of the Bellagio.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/6-belaggio-fountain.jpeg", creator_id: seedUser2.id )
demoVideo7 = Video.create!(title: "Belly Flops", description: "Some think think belly flops are just a style of diving in which the surface impact is made mostly by one's abdomen... We know that it's an art form.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/7-belly-flops.jpeg", creator_id: seedUser2.id )
demoVideo8 = Video.create!(title: "Marine Pool Training", description: "Recruits face many challenges during their 13 weeks on the recruit depot, but swim week is especially challenging for recruits who don't know how to swim.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/8-marines.jpeg", creator_id: seedUser2.id )
demoVideo9 = Video.create!(title: "Marine Pool Training 2", description: "The U.S. Marines have a systemt to train ecruits to be able to survive in the water while wearing all of their combat gear (including a rifle, helmet, flak jacket and pack),.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/9-marines-2.jpeg", creator_id: seedUser2.id )
demoVideo10 = Video.create!(title: "Michael Phelps Can Swim!", description: "Michael Phelps is an avid fan of Swimeo. And in his spare time, he swims, and claims to be pretty good at it.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/10-michael-phelps.jpeg", creator_id: seedUser3.id )
demoVideo11 = Video.create!(title: "tranquil pool water", description: "It is so pleasant to sit by the pool and watch the water.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/11-pool.jpeg", creator_id: seedUser2.id )
demoVideo12 = Video.create!(title: "Rainy Streets", description: "Rain falls in places, includes streets, making the street wet.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/12-rain-street.jpeg", creator_id: seedUser3.id )
demoVideo13 = Video.create!(title: "Rain drops falling on a window", description: "Rain drops falling on a window are pretty, but did you know that they are also an excellent source for hydration?", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/.jpeg", creator_id: seedUser3.id )



video1 = open("https://swimeo-seeds.s3.amazonaws.com/videos/1-waterfall.webm")
video2 = open("https://swimeo-seeds.s3.amazonaws.com/videos/2-water-drops.webm")
video3 = open("https://swimeo-seeds.s3.amazonaws.com/videos/3-tide.webm")
video4 = open("https://swimeo-seeds.s3.amazonaws.com/videos/4-ocean-surface.webm")
video5 = open("https://swimeo-seeds.s3.amazonaws.com/videos/5-bubbles.webm")
video6 = open("https://swimeo-seeds.s3.amazonaws.com/videos/6-belaggio-fountain.webm")
video7 = open("https://swimeo-seeds.s3.amazonaws.com/videos/7-belly-flops.webm")
video8 = open("https://swimeo-seeds.s3.amazonaws.com/videos/8-marines.webm")
video9 = open("https://swimeo-seeds.s3.amazonaws.com/videos/9-marines-2.webm")
video10 = open("https://swimeo-seeds.s3.amazonaws.com/videos/10-michael-phelps.webm")
video11 = open("https://swimeo-seeds.s3.amazonaws.com/videos/11-pool.webm")
video12 = open("https://swimeo-seeds.s3.amazonaws.com/videos/12-rain-street.webm")
video13 = open("https://swimeo-seeds.s3.amazonaws.com/videos/13-rain-window.webm")


demoVideo1.video_url.attach(io: video1, filename: "1-waterfall.webm")
demoVideo2.video_url.attach(io: video2, filename: "2-water-drops.webm")
demoVideo3.video_url.attach(io: video3, filename: "3-tide.webm")
demoVideo4.video_url.attach(io: video4, filename: "4-ocean-surface.webm")
demoVideo5.video_url.attach(io: video5, filename: "5-bubbles.webm")
demoVideo6.video_url.attach(io: video6, filename: "6-belaggio-fountain.webm")
demoVideo7.video_url.attach(io: video7, filename: "7-belly-flops.webm")
demoVideo8.video_url.attach(io: video8, filename: "8-marines.webm")
demoVideo9.video_url.attach(io: video9, filename: "9-marines-2.webm")
demoVideo10.video_url.attach(io: video10, filename: "10-michael-phelps.webm")
demoVideo11.video_url.attach(io: video11, filename: "11-pool.webm")
demoVideo12.video_url.attach(io: video12, filename: "12-rain-street.webm")
demoVideo13.video_url.attach(io: video13, filename: "13-rain-window.webm")



Like.create!([
{user_id: seedUser5.id, video_id: demoVideo8.id},
{user_id: seedUser4.id, video_id: demoVideo1.id},
{user_id: seedUser1.id, video_id: demoVideo1.id},
{user_id: seedUser4.id, video_id: demoVideo9.id},
{user_id: seedUser2.id, video_id: demoVideo5.id},
{user_id: seedUser2.id, video_id: demoVideo12.id},
{user_id: seedUser2.id, video_id: demoVideo1.id},
{user_id: seedUser4.id, video_id: demoVideo4.id},
{user_id: seedUser2.id, video_id: demoVideo6.id},
{user_id: seedUser4.id, video_id: demoVideo10.id},
{user_id: seedUser1.id, video_id: demoVideo10.id},
{user_id: seedUser3.id, video_id: demoVideo10.id},
{user_id: seedUser3.id, video_id: demoVideo2.id},
{user_id: seedUser2.id, video_id: demoVideo2.id},
{user_id: seedUser3.id, video_id: demoVideo4.id},
{user_id: seedUser4.id, video_id: demoVideo8.id},
{user_id: seedUser3.id, video_id: demoVideo8.id},
{user_id: seedUser2.id, video_id: demoVideo4.id},
{user_id: seedUser1.id, video_id: demoVideo3.id},
{user_id: seedUser3.id, video_id: demoVideo7.id},
{user_id: seedUser2.id, video_id: demoVideo3.id},
{user_id: seedUser2.id, video_id: demoVideo9.id},
{user_id: seedUser5.id, video_id: demoVideo3.id},
{user_id: seedUser3.id, video_id: demoVideo5.id},
{user_id: seedUser4.id, video_id: demoVideo5.id},
{user_id: seedUser4.id, video_id: demoVideo7.id},
{user_id: seedUser5.id, video_id: demoVideo7.id},
{user_id: seedUser3.id, video_id: demoVideo3.id},
{user_id: seedUser5.id, video_id: demoVideo4.id},
{user_id: seedUser4.id, video_id: demoVideo6.id},
{user_id: seedUser1.id, video_id: demoVideo6.id},
{user_id: seedUser4.id, video_id: demoVideo3.id},
{user_id: seedUser2.id, video_id: demoVideo8.id},
{user_id: seedUser5.id, video_id: demoVideo12.id}
])

# demoVideo1 = Video.create!(
#     title: 'Belly Flop',
#     description: 'The best belly flop video ever',
#     creator_id: 1
# )

# video1 = open('https://swimeo-seeds.s3.amazonaws.com/rain.mp4')
# demoVideo1.video_url.attach(io: video1, filename: 'rain.mp4')

# Video.create!([
#     {title: "Waterfall", description: "Beautiful natural scene of a waterfall flowing over rocks." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/1-waterfall.jpeg", creator_id: nil }
#     {title: "Water Drop on Surface", description: "Water drops can be so beautiful when hitting the surface of liquides." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/2-water-drops.jpeg", creator_id: nil }
#     {title: "Tide at night", description: "The rocky shore of Salvador, Brazil at night can be so pretty." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/3-tide.jpeg", creator_id: nil }
#     {title: "Ocean waves", description: "Watching the surface of the ocean can be so soothing. It's so blue and ocean-y." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/4-ocean-surface.jpeg", creator_id: nil }
#     {title: "Bubbles", description: "Bubbles are so beautiful, and so, so bubbly." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/5-bubbles.jpeg", creator_id: nil }
#     {title: "Fountains of Bellagio", description: "Every evening, the Bellagio fountain show takes place in front of the Bellagio Hotel. Much like an army of porpoises spewing water in the air, over 1,000 dancing streams are choreographed to music and lights, filling the quarter-mile-long lake in front of the Bellagio." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/6-belaggio-fountain.jpeg", creator_id: nil }
#     {title: "Belly Flops", description: "Some think think belly flops are just a style of diving in which the surface impact is made mostly by one's abdomen... We know that it's an art form." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/7-belly-flops.jpeg", creator_id: nil }
#     {title: "Marine Pool Training", description: "Recruits face many challenges during their 13 weeks on the recruit depot, but swim week is especially challenging for recruits who don't know how to swim." thumbnail ="https://swimeo-seeds.s3.amazonaws.com/images/8-marines.jpeg", creator_id: nil }
# ])

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
Comment.destroy_all

# ApplicationRecord.connection.reset_pk_sequence!("users")
# ApplicationRecord.connection.reset_pk_sequence!("videos")
# ApplicationRecord.connection.reset_pk_sequence!("likes")

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

demoGuest = User.create!(
    first_last_name: 'demoguest',
    email: 'demo@demo.com',
    password: 'password'
)

# SEED USERS
seedUser1 = User.create!( first_last_name: "Billy Ocean", email: "billy@billy.com", password: "password" )
seedUser2 = User.create!( first_last_name: "Mary Pacific", email: "mary@mary.com", password: "password" )
seedUser3 = User.create!( first_last_name: "Willy Atlantic", email: "willy@willy.com", password: "password" )
seedUser4 = User.create!( first_last_name: "Sandra Arctic", email: "sandra@sandra.com", password: "password" )
seedUser5 = User.create!( first_last_name: "Andres Baltic", email: "andres@andres.com", password: "password" )

# SEED VIDEOS
demoVideo1 = Video.create!(title: "Waterfall", description: "Beautiful natural scene of a waterfall flowing over rocks.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/1-waterfall.jpg", creator_id: seedUser2.id )
demoVideo2 = Video.create!(title: "Water Drop on Surface", description: "Water drops can be so beautiful when hitting the surface of liquids.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/2-water-drops.jpg", creator_id: seedUser2.id )
demoVideo3 = Video.create!(title: "Tide at night", description: "The rocky shore of Salvador, Brazil at night can be so pretty.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/3-tide.jpg", creator_id: seedUser2.id )
demoVideo4 = Video.create!(title: "Ocean waves", description: "Watching the surface of the ocean can be so soothing. It's so blue and ocean-y.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/4-ocean-surface.jpg", creator_id: seedUser4.id )
demoVideo5 = Video.create!(title: "Bubbles", description: "Bubbles are so beautiful, and so, so bubbly.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/5-bubbles.jpg", creator_id: seedUser4.id )
demoVideo6 = Video.create!(title: "Fountains of Bellagio", description: "Every evening, the Bellagio fountain show takes place in front of the Bellagio Hotel. Much like an army of porpoises spewing water in the air, over 1,000 dancing streams are choreographed to music and lights, filling the quarter-mile-long lake in front of the Bellagio.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/6-belaggio-fountain.jpg", creator_id: seedUser5.id )
demoVideo7 = Video.create!(title: "Belly Flops", description: "Some think think belly flops are just a style of diving in which the surface impact is made mostly by one's abdomen... We know that it's an art form.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/7-belly-flops.jpg", creator_id: seedUser2.id )
demoVideo8 = Video.create!(title: "Marine Pool Training", description: "Recruits face many challenges during their 13 weeks on the recruit depot, but swim week is especially challenging for recruits who don't know how to swim.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/8-marines.jpg", creator_id: seedUser2.id )
demoVideo9 = Video.create!(title: "Marine Pool Training 2", description: "The U.S. Marines have a systemt to train ecruits to be able to survive in the water while wearing all of their combat gear (including a rifle, helmet, flak jacket and pack),.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/9-marines-2.jpg", creator_id: seedUser2.id )
demoVideo10 = Video.create!(title: "Michael Phelps Can Swim!", description: "Michael Phelps is an avid fan of Swimeo. And in his spare time, he swims, and claims to be pretty good at it.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/10-michael-phelps.jpg", creator_id: seedUser1.id )
demoVideo11 = Video.create!(title: "tranquil pool water", description: "It is so pleasant to sit by the pool and watch the water.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/11-pool.jpg", creator_id: seedUser4.id )
demoVideo12 = Video.create!(title: "Rainy Streets", description: "Rain falls in places, includes streets, making the street wet.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/12-rain-street.jpg", creator_id: seedUser5.id )
demoVideo13 = Video.create!(title: "Rain drops falling on a window", description: "Rain drops falling on a window are pretty, but did you know that they are also an excellent source for hydration?", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/13-rain-window.jpg", creator_id: seedUser4.id )
demoVideo14 = Video.create!(title: "rainbow trout are the real monsters", description: "They may look innocent, but rainbow trout are predators. They will eat almost anything that they can catch, including insects, small fish, crustaceans, and even Chipotle.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/14-trout.jpg", creator_id: seedUser3.id )
demoVideo15 = Video.create!(title: "ocean soothing feet", description: "Soaking your tootsies in soothing salty ocean water is the best.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/15-feet-water.jpg", creator_id: seedUser5.id )
demoVideo16 = Video.create!(title: "Summer pool time", description: "Nothing is more than a summer jump in the pool.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/16-kids-pool.jpg", creator_id: seedUser2.id )
demoVideo17 = Video.create!(title: "snorkel P.O.V.", description: "Snorkeling underwater can be so peaceful and serene. I feel like a sea tortoise, or a walrus.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/17-snorkel-pov.jpg", creator_id: seedUser4.id )
demoVideo18 = Video.create!(title: "dog playing fetch in water", description: "This retriever is eager to play fetch and go swim in the water. He is having a blast!", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/18-dog-splash.jpg", creator_id: seedUser1.id )
demoVideo19 = Video.create!(title: "turquoise tide", description: "The tide coming in on a sunny day is the most beautiful thing I have ever seen, even better than seeing two meat-lovers pizzas from Papa Johns.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/19-tide-pretty.jpg", creator_id: seedUser5.id )
demoVideo20 = Video.create!(title: "snorkeling on the surface", description: "Snorkeling on the surface can be as healthy exercisee as regular swimming, and just as much fun.", thumbnail: "https://swimeo-seeds.s3.amazonaws.com/images/20-snorkel.jpg", creator_id: seedUser5.id )


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
video14 = open("https://swimeo-seeds.s3.amazonaws.com/videos/14-trout.webm")
video15 = open("https://swimeo-seeds.s3.amazonaws.com/videos/15-feet-water.webm")
video16 = open("https://swimeo-seeds.s3.amazonaws.com/videos/16-kids-pool.webm")
video17 = open("https://swimeo-seeds.s3.amazonaws.com/videos/17-snorkel-pov.webm")
video18 = open("https://swimeo-seeds.s3.amazonaws.com/videos/18-dog-splash.webm")
video19 = open("https://swimeo-seeds.s3.amazonaws.com/videos/19-tide-pretty.webm")
video20 = open("https://swimeo-seeds.s3.amazonaws.com/videos/20-snorkel.webm")


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
demoVideo14.video_url.attach(io: video14, filename: "14-trout.webm")
demoVideo15.video_url.attach(io: video15, filename: "15-feet-water.webm")
demoVideo16.video_url.attach(io: video16, filename: "16-kids-pool.webm")
demoVideo17.video_url.attach(io: video17, filename: "17-snorkel-pov.webm")
demoVideo18.video_url.attach(io: video18, filename: "18-dog-splash.webm")
demoVideo19.video_url.attach(io: video19, filename: "19-tide-pretty.webm")
demoVideo20.video_url.attach(io: video20, filename: "20-snorkel.webm")

# SEED LIKES
Like.create!([
{user_id: seedUser4.id, video_id: demoVideo10.id},
{user_id: seedUser1.id, video_id: demoVideo11.id},
{user_id: seedUser5.id, video_id: demoVideo7.id},
{user_id: seedUser3.id, video_id: demoVideo7.id},
{user_id: seedUser4.id, video_id: demoVideo5.id},
{user_id: seedUser2.id, video_id: demoVideo3.id},
{user_id: seedUser4.id, video_id: demoVideo3.id},
{user_id: seedUser5.id, video_id: demoVideo4.id},
{user_id: seedUser4.id, video_id: demoVideo7.id},
{user_id: seedUser2.id, video_id: demoVideo4.id},
{user_id: seedUser1.id, video_id: demoVideo2.id},
{user_id: seedUser1.id, video_id: demoVideo1.id},
{user_id: seedUser2.id, video_id: demoVideo9.id},
{user_id: seedUser2.id, video_id: demoVideo10.id},
{user_id: seedUser3.id, video_id: demoVideo3.id},
{user_id: seedUser3.id, video_id: demoVideo2.id},
{user_id: seedUser3.id, video_id: demoVideo11.id},
{user_id: seedUser5.id, video_id: demoVideo10.id},
{user_id: seedUser5.id, video_id: demoVideo11.id},
{user_id: seedUser1.id, video_id: demoVideo5.id},
{user_id: seedUser5.id, video_id: demoVideo1.id},
{user_id: seedUser2.id, video_id: demoVideo11.id},
{user_id: seedUser1.id, video_id: demoVideo4.id},
{user_id: seedUser5.id, video_id: demoVideo13.id},
{user_id: seedUser3.id, video_id: demoVideo5.id},
{user_id: seedUser2.id, video_id: demoVideo13.id},
{user_id: seedUser4.id, video_id: demoVideo1.id},
{user_id: seedUser1.id, video_id: demoVideo12.id},
{user_id: seedUser2.id, video_id: demoVideo12.id},
{user_id: seedUser3.id, video_id: demoVideo12.id},
{user_id: seedUser4.id, video_id: demoVideo4.id},
{user_id: seedUser2.id, video_id: demoVideo8.id},
{user_id: seedUser3.id, video_id: demoVideo8.id},
{user_id: seedUser4.id, video_id: demoVideo2.id},
{user_id: seedUser2.id, video_id: demoVideo6.id},
{user_id: seedUser3.id, video_id: demoVideo4.id},
{user_id: seedUser4.id, video_id: demoVideo6.id},
{user_id: seedUser3.id, video_id: demoVideo1.id},
{user_id: seedUser4.id, video_id: demoVideo8.id},
{user_id: seedUser2.id, video_id: demoVideo1.id},
{user_id: seedUser4.id, video_id: demoVideo15.id},
{user_id: seedUser5.id, video_id: demoVideo17.id},
{user_id: seedUser1.id, video_id: demoVideo18.id},
{user_id: seedUser3.id, video_id: demoVideo19.id},
{user_id: seedUser1.id, video_id: demoVideo20.id},
{user_id: seedUser1.id, video_id: demoVideo17.id},
{user_id: seedUser4.id, video_id: demoVideo18.id},
{user_id: seedUser5.id, video_id: demoVideo12.id}
])

# SEED COMMENTS
Comment.create!([
{user_id: seedUser4.id, video_id: demoVideo10.id, body: "A woman would run through fire and water for such a kind heart."},
{user_id: seedUser1.id, video_id: demoVideo11.id, body: "Tears water our growth."},
{user_id: seedUser5.id, video_id: demoVideo7.id, body: "People’s good deeds we write in water. The evil deeds are etched in brass."},
{user_id: seedUser3.id, video_id: demoVideo7.id, body: "Smooth runs the water where the brook is deep."},
{user_id: seedUser4.id, video_id: demoVideo5.id, body: "Glory is like a circle in the water"},
{user_id: seedUser2.id, video_id: demoVideo3.id, body: "He's of the colour of the nutmeg. And of the heat of the ginger.... he is pure air and fire; and the dull elements of earth and water never appear in him, but only in patient stillness while his rider mounts him; he is indeed a horse, and all other jades you may call beasts."},
{user_id: seedUser4.id, video_id: demoVideo3.id, body: "He that commends me to mine own content Commends me to the thing I cannot get. I to the world am like a drop of water That in the ocean seeks another drop, Who, falling there to find his fellow forth, Unseen, inquisitive, confounds himself: So I, to find a mother and a brother, In quest of them, unhappy, lose myself."},
{user_id: seedUser5.id, video_id: demoVideo4.id, body: "Mother, Brother, Ocean"},
{user_id: seedUser4.id, video_id: demoVideo7.id, body: "My story starts at sea... a perilous voyage to an unknown land... a shipwreck... The wild waters roar and heave... The brave vessel is dashed all to pieces, and all the helpless souls within her drowned... all save one... a lady... whose soul is greater than the ocean... and her spirit stronger than the sea's embrace... Not for her a watery end, but a new life beginning on a stranger shore. It will be a love story... for she will be my heroine for all time. And her name will be... Viola."},
{user_id: seedUser2.id, video_id: demoVideo4.id, body: "But when I came, alas, to wive, With hey, ho, the wind and the rain, By swaggering could I never thrive, For the rain it raineth every day."},
{user_id: seedUser1.id, video_id: demoVideo2.id, body: "Not all the water in the rough rude sea Can wash the balm from an anointed King."},
{user_id: seedUser1.id, video_id: demoVideo1.id, body: "With what deep murmurs through time’s silent stealth, Doth thy transparent, cool, and wat’ry wealth, Here flowing fall, and chide, and call."},
{user_id: seedUser2.id, video_id: demoVideo9.id, body: "And quench the guards of the ever-fixed pole."},
{user_id: seedUser2.id, video_id: demoVideo10.id, body: "He says, he loves my daughter;I think so too; for never gaz'd the moonUpon the water, as he'll stand and read,As 'twere, my daughter's eyes: and, to be plain, I think, there is not half a kiss to choose,Who loves another best."},
{user_id: seedUser3.id, video_id: demoVideo3.id, body: "I pray thee cease thy counsel,Which falls into mine ears as profitless as water in a sieve."},
{user_id: seedUser3.id, video_id: demoVideo2.id, body: "That which is now a horse, even with a thought The rack dislimms, and makes it indistinct As water is in water"},
{user_id: seedUser3.id, video_id: demoVideo11.id, body: "His steeds to water at those springs On chaliced flowers that lies; And winking Mary-buds begin To ope their golden eyes: With every thing that pretty is, My lady sweet, arise."},
{user_id: seedUser5.id, video_id: demoVideo10.id, body: "Uma mulher correu fogo e água para um coração tão gentil."},
{user_id: seedUser5.id, video_id: demoVideo11.id, body: "Lágrimas molham nosso crescimento."},
{user_id: seedUser1.id, video_id: demoVideo5.id, body: "As boas ações das pessoas que escrevemos na água. As más ações estão gravadas em bronze."},
{user_id: seedUser5.id, video_id: demoVideo1.id, body: "Suave corre a água onde o fluxo é profundo."},
{user_id: seedUser2.id, video_id: demoVideo11.id, body: "Glória é como um círculo na água"},
{user_id: seedUser1.id, video_id: demoVideo4.id, body: "É a cor da noz-moscada. E do calor do gengibre ... é puro ar e fogo; e os elementos opacos da terra e da água nunca aparecem nela, mas apenas na calma paciente enquanto o cavaleiro o monta; ele é realmente um cavalo, e todos os outros jade que você pode chamar de bestas."},
{user_id: seedUser5.id, video_id: demoVideo13.id, body: "Quem recomenda meu próprio conteúdo me recomenda o que não posso receber. Eu, para o mundo, sou como uma gota d'água Quem no oceano procura outra gota Que, caindo lá para encontrar seu companheiro, Invisível, inquisitivo, fica confuso: Então eu, para encontrar mãe e irmão, Em busca deles Infelizmente, eu me perco."},
{user_id: seedUser3.id, video_id: demoVideo5.id, body: "Mãe, Irmão, Oceano"},
{user_id: seedUser2.id, video_id: demoVideo13.id, body: "Minha história começa no mar ... uma viagem perigosa para uma terra desconhecida ... um naufrágio ... As águas selvagens rugem e agitam ... O navio corajoso é despedaçado e todas as almas desamparadas dentro dele se afogam. ..todos salvar uma ... uma senhora ... cuja alma é maior que o oceano ... e seu espírito mais forte que o abraço do mar ... Não para ela um fim aguado, mas uma nova vida começando em um Praia estranha. Será uma história de amor ... pois ela será minha heroína de todos os tempos. E o nome dela será ... Viola."},
{user_id: seedUser4.id, video_id: demoVideo1.id, body: "Mas quando eu vim, infelizmente, para me casar, Com oi, ho, o vento e a chuva, Por arrogância eu nunca poderia prosperar, Pela chuva chove todos os dias."},
{user_id: seedUser1.id, video_id: demoVideo12.id, body: "Nem toda a água no mar agitado e agitado pode lavar o bálsamo de um rei ungido."},
{user_id: seedUser2.id, video_id: demoVideo16.id, body: "O vento alto e monstruoso de cano parece espirrar o urso em chamas e extinguir os guardas sempre fixos."},
{user_id: seedUser2.id, video_id: demoVideo3.id, body: "E apague os guardas do posto sempre fixo."},
{user_id: seedUser3.id, video_id: demoVideo8.id, body: "Ele diz que ama minha filha, eu também acho; porque ele nunca viu a lua na água, como ele deve se levantar e ler, como dois, os olhos de minha filha; E, para ficar claro, acho que não há meio beijo para escolher, Quem ama outro melhor."},
{user_id: seedUser2.id, video_id: demoVideo14.id, body: "Peço-lhe que pare, que cai em meus ouvidos tão inútil quanto a água de uma peneira."},
{user_id: seedUser4.id, video_id: demoVideo3.id, body: "O que é agora um cavalo, mesmo com um pensamento O rack desliga e fica confuso Como a água está na água"},
{user_id: seedUser4.id, video_id: demoVideo12.id, body: "Seus corcéis para regar as fontes Nas flores calcificadas que jazem; E quando os botões de Maria brotam, eles começam a se opor aos seus olhos dourados: Com tudo o que é belo, Minha doce senhora, levante-se."},
{user_id: seedUser2.id, video_id: demoVideo4.id, body: "The wind-shak'd surge, with high and monstrous main, Seems to cast water on the burning Bear, And quench the guards of the ever-fixed pole."},
{user_id: seedUser3.id, video_id: demoVideo14.id, body: "Uma mulher correu fogo e água para um coração tão gentil."},
{user_id: seedUser4.id, video_id: demoVideo16.id, body: "Lágrimas molham nosso crescimento."},
{user_id: seedUser4.id, video_id: demoVideo14.id, body: "As boas ações das pessoas que escrevemos na água. As más ações estão gravadas em bronze."},
{user_id: seedUser5.id, video_id: demoVideo7.id, body: "Suave corre a água onde o fluxo é profundo."},
{user_id: seedUser5.id, video_id: demoVideo6.id, body: "Glória é como um círculo na água"},
{user_id: seedUser2.id, video_id: demoVideo12.id, body: "É a cor da noz-moscada. E do calor do gengibre ... é puro ar e fogo; e os elementos opacos da terra e da água nunca aparecem nela, mas apenas na calma paciente enquanto o cavaleiro o monta; ele é realmente um cavalo, e todos os outros jade que você pode chamar de bestas."},
{user_id: seedUser3.id, video_id: demoVideo7.id, body: "Quem recomenda meu próprio conteúdo me recomenda o que não posso receber. Eu, para o mundo, sou como uma gota d'água Quem no oceano procura outra gota Que, caindo lá para encontrar seu companheiro, Invisível, inquisitivo, fica confuso: Então eu, para encontrar mãe e irmão, Em busca deles Infelizmente, eu me perco."},
{user_id: seedUser3.id, video_id: demoVideo6.id, body: "Mãe, Irmão, Oceano"},
{user_id: seedUser3.id, video_id: demoVideo10.id, body: "Minha história começa no mar ... uma viagem perigosa para uma terra desconhecida ... um naufrágio ... As águas selvagens rugem e agitam ... O navio corajoso é despedaçado e todas as almas desamparadas dentro dele se afogam. ..todos salvar uma ... uma senhora ... cuja alma é maior que o oceano "},
{user_id: seedUser3.id, video_id: demoVideo7.id, body: "Thousands have lived without love, not one without water. Except in Gowanus."},
{user_id: seedUser4.id, video_id: demoVideo13.id, body: "Nem toda a água no mar agitado e agitado pode lavar o bálsamo de um rei ungido."},
{user_id: seedUser2.id, video_id: demoVideo1.id, body: "O vento alto e monstruoso de cano parece espirrar o urso em chamas e extinguir os guardas sempre fixos."},
{user_id: seedUser5.id, video_id: demoVideo10.id, body: "E apague os guardas do posto sempre fixo."},
{user_id: seedUser2.id, video_id: demoVideo16.id, body: "A book should serve as the ax for the frozen sea within us."},
{user_id: seedUser1.id, video_id: demoVideo3.id, body: "If you want to build a ship, don't drum up people together to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea."},
{user_id: seedUser2.id, video_id: demoVideo20.id, body: "Follow the river and you will find the sea."},
{user_id: seedUser3.id, video_id: demoVideo19.id, body: "Sea-nymphs hourly ring his knell: Ding-dong. Hark! now I hear them,—Ding-dong, bell."},
{user_id: seedUser4.id, video_id: demoVideo19.id, body: "O, brave new sea that has such people in it!"}
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

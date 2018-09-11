# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Post.create(id: 1, title: "Bazinga", content: "Lorem ipsum dolor amet kombucha glossier single-origin coffee beard, aesthetic trust fund leggings farm-to-table franzen biodiesel air plant. Ramps helvetica waistcoat slow-carb gentrify. Occupy asymmetrical 8-bit ramps kogi cray. Humblebrag lyft tilde photo booth, irony 90's aesthetic literally drinking vinegar. Fanny pack yr microdosing jianbing chia truffaut ramps kinfolk cred glossier. Viral pour-over stumptown beard jean shorts lyft sriracha asymmetrical glossier church-key ennui drinking vinegar yr. Leggings disrupt roof party PBR&B prism.", author: "CrazedHipster004")

Post.create(id: 2, title: "Hubris Incarnate", content: "Lorem ipsum dolor amet microdosing PBR&B meggings woke normcore. XOXO coloring book ramps, +1 knausgaard locavore keytar williamsburg adaptogen dreamcatcher ennui. Man braid crucifix everyday carry banjo freegan tbh ugh brooklyn 90's beard pug. Scenester artisan normcore, enamel pin biodiesel tilde ennui pop-up brooklyn adaptogen tote bag venmo la croix viral dreamcatcher. Williamsburg iPhone street art, bitters meggings thundercats XOXO cardigan shaman disrupt dreamcatcher. Chambray gastropub vaporware bitters poutine brooklyn hell of enamel pin man braid kogi try-hard lumbersexual.", author: "WhateverMan")

Post.create(id: 3, title: "Chickenscratch", content: "Lorem ipsum dolor amet unicorn hot chicken hella fixie 90's wolf direct trade palo santo pok pok adaptogen +1. Gastropub activated charcoal pour-over cardigan, man bun celiac kinfolk aesthetic roof party unicorn organic hot chicken vape affogato. Godard occupy la croix adaptogen mlkshk lyft actually gentrify squid synth. Locavore bitters williamsburg, salvia sartorial DIY narwhal air plant kinfolk normcore. DIY vinyl yr skateboard palo santo meditation williamsburg copper mug vaporware retro man bun quinoa tumblr tote bag. Flexitarian man braid food truck fixie chia fashion axe blue bottle vice church-key.", author: "GiantChicken492")

Comment.create(id: 1, post_id: 1, author: "WhateverMan", content: "Wow this is pretty heavy stuff, my guy.")

Comment.create(id: 2, post_id: 2, author: "TiaraLady32", content: "You're from NYC? You're def arrogant AF lol.")

Comment.create(id: 3, post_id: 1, author: "FrogMaster73", content: "I concur with the gentleman above me.")

Comment.create(id: 4, post_id: 3, author: "SomeGuy99", content: "Woahhh dude, now I'm hungry for some Chick-fil-A.")

Comment.create(id: 5, post_id: 2, author: "GiantChicken492", content: "What is a try-hard lumbersexual even??")

Comment.create(id: 6, post_id: 3, author: "CrazedHipster004", content: "I mean, I love chicken as much as the next guy, but this level of chikenery is absolutely ridiculous!")

Collection.create(id: 1, name: "Best Fast Food Places", description: "In-N-Out is sooooo overated...", owner: "SomeGuy99")

Collection.create(id: 2, name: "My Vacation Destinations", description: "Places that I have visited and places that I would love to visit!", owner: "TiaraLady32")

Collection.create(id: 3, name: "Favorite Superheroes", description: "The world really needs real-live superheroes, like actually tho.", owner: "FrogMaster73")

Item.create(id: 1, collection_id: 1, name: "Bojangles", description: "Can't beat their famous chicken and biscuits!")

Item.create(id: 2, collection_id: 1, name: "Chipotle", description: "Yes, I count this as fast food. It's certainly not authentic Mexican.")

Item.create(id: 3, collection_id: 2, name: "London", description: "It's cold as hell up there, but there's lots to see.")

Item.create(id: 4, collection_id: 2, name: "Thailand", description: "Can't wait to try authentic Thai cuisine!")

Item.create(id: 5, collection_id: 3, name: "Batman", description: "Some say he's not a superhero cuz he doesn't have powers. Those people are the wrongest of the wrong.")

Item.create(id: 6, collection_id: 3, name: "Captain America", description: "You can always rely on good ol' Cap to have your back.")

Review.create(id: 1, collection_id: 1, title: "What???", content: "How can you condone eating my bretheren?!", author: "GiantChicken492", rating: 1)

Review.create(id: 2, collection_id: 1, title: "Amazing", content: "These are good places to eat, and I agree - In-N-Out is totes overrated.", author: "TiaraLady32", rating: 5)

Review.create(id: 3, collection_id: 2, title: "Not even close", content: "There are way better places to visit, my dear. Try Cancun, perhaps. Or even anywhere in Italy! Can't beat the food there.", author: "FrogMaster73", rating: 2)

Review.create(id: 4, collection_id: 2, title: "You seem fun", content: "I'd totally love to travel with you sometime! I was thinking somewhere more tropical and less cold, like the African Savannah or Brazil.", author: "WhateverMan", rating: 4)

Review.create(id: 5, collection_id: 3, title: "Needs more Marvel", content: "DC sucks, not even Batman makes up for how terrible they are. How could you not include classics like Spiderman or The Punisher?", author: "SomeGuy99", rating: 2)

Review.create(id: 6, collection_id: 3, title: "Are you serious right now?", content: "Um, you do realize that The Punisher is not actually a superhero, right? He's an anti-hero who kills people... Regardless, I find this collection of heroes fascinating. I'd like to see more.", author: "CrazedHipster004", rating: 4)

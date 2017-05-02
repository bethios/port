(function() {
    function Fixtures() {

        var caseStudies = [
            {   Project: "Frankie Jams Out",
                Summary: "Frankie Jams Out is a responsive music app built with JQuery and Buzz designed with parents and kids in mind. Users can stream " +
                "unlimited on any device without an account, rate songs and create a cultivated playlist.",
                Problem: "Kid's music drives parents crazy and pressing shuffle on iTunes can lead to some interesting questions from the kiddos.",
                Solution: "Frankie Jams Out curates a selection of music that kids can sing along to but parent's won't mind hearing on repeat.",
                Results: "With the ability to customize your playlist, rate songs for the community and skip to your favorite part of the chorus there are " +
                "features that both parents and kids will love",
                Conclusion: "As it turns out its easy enough for a four year old to use. Requests have included the ability to skip entire albums and user " +
                "accounts to store preferences.",
                ipadView: '../../assets/images/frankiejamsout(iPad).png',
                phoneView: '../../assets/images/frankiejamsout(iPhone)(1).png',
                laptopView: '../../assets/images/frankieJams-laptop.png',
                mainImage: '../../assets/images/frankiejamsout(iPhone).png',
                github: 'https://github.com/bethios/Frankie-Jams-Out',
                languageIcons: ['devicon-jquery-plain','devicon-bootstrap-plain', 'devicon-css3-plain'],
                deployLink: 'http://frankiejamsout.netlify.com/'
            },
            {   Project: "Must Chat TV",
                Summary: "Must Chat TV is a web app built using AngularJS and firebase's database and authentication systems. Users can create an account, " +
                "select or create chat rooms in real time and send messages. Admins have the ability to create private rooms for chosen users.",
                Problem: "Social media can be an overload, you are excited about the season premiere of your favorite show and you want to chat with your " +
                "friends about it without having to scroll through your second counsins political rants on facebook. ",
                Solution: "Must Chat TV is solely dedicated to making the television watching experience more social. Chat with friends about the latest plot" +
                " twists and dish on what you think will happen on next week's episode",
                Results: "The end result is a retro feel with modern features. Users can add rooms and admins can create private rooms for select users.",
                Conclusion: "Beginning user testing is positive, future features include admin's ability to delete rooms, ban users and for users to report " +
                "abuse.",
                ipadView: '../../assets/images/mustchat(iPad).png',
                phoneView: '../../assets/images/mustchat(iPhone).png',
                laptopView: '../../assets/images/mustChat-laptop.png',
                mainImage: '../../assets/images/mustchattv(iPhone)(1).png',
                github: 'https://github.com/bethios/mustchatTV',
                languageIcons: ['devicon-angularjs-plain','devicon-bootstrap-plain', 'devicon-css3-plain'],
                deployLink: 'http://mustchattv.netlify.com/'
            },
            {   Project: "Cookit- Grandma's Recipes",
                Summary: "Cookit is a place to store and find family recipes handed down over generations.",
                Problem: "Family recipes-- Grandma's sunday sauce, Tia's Enchiladas, Pop's Pancakes have traditionally been passed down orally. More and more" +
                "these recipes are being lost to time and technology. WIth Cookit users can peruse recipes by dish and see how different families made their 'perfect' " +
                "version.",
                Solution: "An easily browsable resource for family traditions that can be shared worldwide",
                Results: "Recipes can be added and styled using markdown language. User accounts hold their submitted recipes, track comments and their favorites. ",
                Conclusion: "Responses have been positive, additional features for search and more complete instructions on using markdown language in the next version.",
                ipadView: '../../assets/images/cookit-iPad.png',
                phoneView: '../../assets/images/cookit-iPhone 6(2).png',
                laptopView: '../../assets/images/cookit-iPhone 6(2).png',
                mainImage: '../../assets/images/cookit-iPhone 6.png',
                github: 'https://github.com/bethios/bloccit',
                languageIcons: ['devicon-ruby-plain','devicon-rails-plain', 'devicon-css3-plain'],
                deployLink: 'https://cookit-grandmasrecipes.herokuapp.com/'
            },
            {   Project: "Booted",
                Summary: "A wiki for coding bootcamp students and grads.",
                Problem: "Coding bootcamp curriculums can vary wildly. But one thing is certain, you can't learn it all in such a short time. Supplement skills" +
                " missing from your bootcamp education, brush up on interview techniques and share advice.",
                Solution: "A wiki inspired resource to collaborate and learn",
                Results: "Utilizing the Devise gem users can create accounts and easily retrieve passwords. With the Stripe gem users can upgrade to a premium account allowing" +
                " the creation of private wikis and add collaborators to projects",
                Conclusion: "Students from the same cohort utilize the premium membership and private wikis to create specialized wikis to supplement their education.",
                ipadView: '../../assets/images/booted(iPad).png',
                phoneView: '../../assets/images/booted(iPhone)(1).png',
                laptopView: '../../assets/images/booted(iPhone)(1).png',
                mainImage: '../../assets/images/booted(iPhone).png',
                github: 'https://github.com/bethios/bloccit',
                languageIcons: ['devicon-ruby-plain','devicon-rails-plain', 'devicon-css3-plain'],
                deployLink: 'https://booted-resource.herokuapp.com/'
            }
        ];

        var posts = [
            {   week: "Week 15: 5/1-5/7",
                contents:
                "I started and finished my last project as part of the backend foundations.  I created a gem from scratch! I mean, I obviously knew this was " +
                "possible to do but it had never occurred to me until this week. The gem allows Bloc students to access its API through a external facing JSON Web " +
                "Token. With it students can log in with their credentials and access key information like their profile info, their mentor’s availability and " +
                "their course roadmap.  I made sure to create additional functionality to allow not just the retrieval of information but its creation. Messages" +
                " can be created and sent to any user, completed checkpoints can be submitted to mentors as well as updated. I’ve used so many gems at this point " +
                "in the curriculum that it was wonderful to create one myself!",
                image: '../assets/images/kele.png'
            },
            {   week: 'Week 14: 4/24-4/30',
                contents: 'This week was more of the wiki site, I decided to create an option for users to upgrade to a premium membership level that allows' +
                ' them to create private wikis.  I integrated stripe to take a monthly membership payments. Premium members can add collaborators and work in ' +
                'tandem to build out their wikis.  I imagine this will be incredibly helpful for students graduating in the same bootcamp cohort to pool their' +
                ' resources and create a really tailored comprehensive database of knowledge.  That is one of the downsides of Bloc, you don’t have a single' +
                ' group of folks all at the same point as you going through the same struggles.  While you will always find someone who is doing what you are' +
                ' doing on any given day those people change week to week as no one really keeps the same pace.  I’m about 10% ahead of pace now so even folks' +
                ' who were on the same track, starting at the same time as me are no longer on the same projects.  It can be isolating for sure.',
                image: '../assets/images/booted(iPhone).png'
            },
            {   week: 'Week 13: 4/17-4/23',
                contents: 'This week started a wiki type site that I’m calling “Booted” the idea is a site for bootcamp students and grads like myself to ' +
                'supplement the knowledge of their coursework with techniques, technologies and computer science principles that their bootcamp might have' +
                ' glossed over.  Using the devise gem I creating a way for folks to log in, retrieve and edit passwords. It was a little finicky to set up but' +
                ' its so worth it to add that extra polish to the site. With my test driven development I entertained myself a little too much with the faker ' +
                'gem, which allows you to generate (often goofy) seed data for your development database.  It was a fun little diversion and an adorable ' +
                'alternative to the random data generator I had used previously.',
                image: '../assets/images/faker.png'

            },
            {   week: 'Week 12: 4/10-4/16',
                contents: 'I’ve decided to rebrand my reddit site into ‘Cookit’.  The idea is that folks can contribute their grandmother’s recipes  and users can ' +
                'comment, up/down vote and favorite recipes along the way.  There are so many beautiful, rustic recipes that are lost to time.  When recipes were ' +
                'handed down not on paper but by experience in the kitchen. The site will be developed into Dishes, the name of the dish itself (i.e. Spaghetti and ' +
                'Meatballs) with a little description of where the dish originates, fun facts, etcetera.  And within the Dish users can post their Grandma’s version' +
                ' as a stand alone recipe.  That way users can see a whole list of all the versions of spaghetti and meatballs, compare and contrast and pick out those' +
                ' they’d like to try. I’m utilizing the bcrypt gem for encrypting user passwords and figaro to hide all my sensitive data.  I was pretty happy with the ' +
                'result but the formatting of the recipes weren’t quite right, so I’ve installed the redcarpet gem as well so users can utilize markdown syntax to style ' +
                'their recipes with lists, images and the like.  Now I need a few folks to help me use test it and I’ll be set!',
                image: '../assets/images/cookit-iPad.png'
            },
            {   week: 'Week 11: 4/3-4/9',
                contents: 'And onto the first big Ruby Project! We are making a Reddit type site with all the bells and whistles.  So far we’ve worked on basics like ' +
                'CRUD structure and a lot of Ruby built ins.  I definitely am seeing the developer friendly allure of Ruby with all the tools that can auto generate ' +
                'models and controllers and the simplicity of gems.',
                image: '../assets/images/cookit-setup.png'
            },
            {   week: 'Week 10: 3/27 - 4/2',
                contents: 'I’ve been working on two big projects outside of my course work this week. The first is a portfolio site for an L.A. Producer/Director ' +
                'featuring lots of videos to her work, a modal pop up with her resume and a nice, clean style. I was tempted to build in Angular or Ruby since those ' +
                'are the freshest in my mind but instead I went with JQuery.  We only did one project in it in Bloc thus far and I thought this would be a great ' +
                'chance to brush up.  While I was at it I decided to break the bootstrap hold on me and experiment with css grid for layout.  I know bootstrap can be' +
                ' a lot for the page to load and the simplicity and ease of css grid is really and truly wonderful.  So much easier to layout even complex pages with' +
                ' so many options.  Definitely going in the ol’ toolkit. The second project is a site for a local business who carries local, handmade artists exclusively.' +
                '  My first meeting with her went wonderfully!  I showed her my wireframe ideas and we talked about all our options to best show off the range and ' +
                'diversity of her artists.  Priorities include a landing page that is both simple and visually stunning with lots of photos of her artists.  Inside ' +
                'you’ll be able to browse artists by medium (photography, ceramics, fiber, etc) and see a profile of each maker.  I think it’ll be truly beautiful and ' +
                'a wonderful marketing tool once it’s finished!',
                image: '../assets/images/caree.png'
            },
            {   week: "Week 9: 3/20-26",
                contents: "Ruby time!  I’ve officially wrapped up the front-end module and I’m on to back end goodness with Ruby.  It’s strange, I learned " +
                "Javascript for the last year on my own so it feels like an friend, if I got stuck I knew exactly which sites to visit to get unstuck.  I knew " +
                "how to debug and to fiddle enough to not break anything.  Ruby is definitely starting from scratch in some ways.  Old habits die hard and I’m " +
                "definitely struggling to break some JS syntax habits.  Parenthesis and curly  braces for everywhere no longer! This week also began with an " +
                "intro to Test Driven Development which has been on my list of things I want to learn before getting into the real world.  It's very cool to " +
                "use but wrapping your brain on making tests that will fail will certainly take some practice. An invaluable tool to be sure. We’ve started " +
                "building a web based address book this week.  Lots of testing the program in the command line!",
                image: '../assets/images/addressbook.png'
            },
            {
                week: "Week 8: 3/13-3/19",
                contents: "So much has gotten done in the last week! Our next assignment was a personal portfolio (oh hey, you are on it right now!).  I knew " +
                "the content was going to get pretty lengthy what with case studies and a blog and what not so I decided to fiddle around with an accordion " +
                "design that automatically closed sections that weren’t being used. Lengthy sections like this very blog got their overflow adjusted to include" +
                " an interior scroll to keep things tidy.  For the case studies I found some great resources to show screen shots on different size devices and" +
                " eventually settled on initially showing them all on phone screens instead of boring ol’ tiles.  This way you can click anyone to be taken to a" +
                " more detailed look. I also found time this week to devote to learning Sass. Omg its so cool.  The variables in Sass blew my mind, so handy! I" +
                " loves the simplicity of the mixins.  I immediately started playing around with it on a portfolio site I’m making for a film director/producer. " +
                " I’m in love with Sass.  While trying to figure out a palette I stumbled to coolors.com and had a blast messing with their color palette generator",
                image: '../assets/images/variables.png'
            },
            {
                week: "Week 7: 3/6-3/12",
                contents:'This week has been all Angular all the time.  We were tasked to build a chat app using Angular and Firebase’s realtime database' +
                ' system.  I branded mine Must Chat TV, the idea being a social media platform dedicated to one thing, live chatting with friends about your ' +
                'favorite shows while watching live.  I decided to go for 1950’s atomic age branding to make it a little fun. I ran into a few problems that ' +
                'stackoverflow and some googling helped solve, getting the message view to scroll automatically to the newest message and clearing the message ' +
                'field after sending to be ready for the next brilliant observation. After getting the assigned tasks of being able to start a new room, send ' +
                'messages and create a username I decided to go a little further.  Firebase has a built in authentication system I decided to take advantage of, ' +
                'now users on navigating to the site are prompted to log in or create a user account.  Additionally, I set up a system for admin users to have the ' +
                'option of creating private rooms for selected users.',
                image: '../assets/images/mustchattv(iPad).png'

            },
            {week: "Week 6: 2/27 - 3/5",
            contents:
                "This has been a pretty amazing week, not going to lie.  I finished the structured portion of refactoring Bloc Jams to Angular " +
                "(from JQuery) and since I had some extra time I thought I’d be a bit of an overachiever and add some extra features.  " +
                "I started by thinking about what would be most important to me as a user.  Easy, tippie top of my list is setting songs to " +
                "play automatically after the previous song has finished.  After a little poking and prodding with my factory service I had it " +
                "figured out.  From there I added a icon for muting and used Buzz’s toggleMute() built in functionality to knock that one out too. " +
                "The next two took a little pencil and paper to figure out how I wanted to go about solving them: rating songs and custom playlists." +
                " I knew I didn’t want to muck up the UX of the site with a million stars so I decided to move the rating system to the playbar so " +
                "that only one set of stars would show up for the current playing song, leaving the album view much cleaner.  A few functions later" +
                " and a couple of updates to my album objects and I had a fully functioning star rating system that allowed user to rate and then " +
                "changed the DOM to show the current rating from the community. Customizing the playlist was a step by step process.  First I did " +
                "the coding to add a X to each song element that on-click would set the song to be skipped in its object. It worked but the UX " +
                "wasn’t quite right.  So I played around with different styling options and eventually settled on once a song was marked as skip " +
                "the number of the song would be replaced by a X as well and the entire song line’s css styling would be changed to be grayed out " +
                "to provide further visual representation that the song wasn’t to be included.  Voila! Lots of little extras that added up to a " +
                "better user experience!",
                image: '../assets/images/playerbar.png'
            },
            {week: 'Week 5: 2/20-2/26',
            contents: "I finished my bloc-jams app and rebranded it to 'Frankie Jams Out'  it's gone from being a generic music player to one marketed " +
                "towards parents and kids. I had a great time restyling all the css and refactoring a lot of the jquery to make it cleaner and simpler to read." +
                "  Also tooled around with functionalities like making the volume and seek bars easier (and prettier) to use. Soon we will be remaking the site" +
                " once again using Angular. A brand new language! Add another tool to my toolbelt." +
                "I think if I have time I will come back to the project to add some additional functionalities like a search function, a mute button, and if I’m" +
                " feeling really crazy-- custom play lists!",
                image: '../assets/images/frankiejamsout(iPhone).png'
            },
            {week: 'Week 4: 2/13 - 2/19',
                contents:"This week I sat down for coffee with a web developer who came out of a coding bootcamp two years ago.  It was so wonderful" +
                " to hear from someone who was once where I am now-- learning at a lightning pace, enthusiastic and passionate about the things that are " +
                "being learned but standing at the precipice of the unknown.  Her advice and guidance was indispensable as a fellow woman in a male dominated " +
                "field.  For instance, she offered, that she tends to gravitate towards companies who sponsor meetups/events that promote diversity, because " +
                "if they are going out of their way to promote women in tech then certainly they have a company culture which values the same. My high school was " +
                "an engineering magnet school in which the graduating classes female population consisted of us in 5 total, so a male dominated field isn’t " +
                "exactly foreign to me.  But at coffee, she pointed out that a red flag for her would be a company in which she’d be the only woman, something " +
                "that had never occurred to me. It was also interesting to hear how vastly her program differed from mine, hers was the typical bootcamp-- 13 " +
                "weeks, 70 hours a week breakneck pace which made me grateful for my 20-30 hour a week for 27 marathon.  Her program also didn’t get intensive " +
                "into javascript which we are currently neck deep in after just four weeks.  It really shows how varied coding schools can be. She stressed " +
                "how weighty Imposter Syndrome can feel, especially when starting out.  And that the thing that eventually got her over those insecurities " +
                "were taking ownership over a portion of a build, no matter how small, in which she was the expert and go-to person.  That ownership made her" +
                " realize just how far she really had come.  Words of wisdom if you ask me.",
                image: '../assets/images/rosie-tech.jpg'

            },
            {week: "Week 3: 2/6-2/12",
                contents: "This week I started work on Bloc-Jams, it's a online music player that allows you to stream your favorite music.  This is the first " +
                "time I’ve worked with DOM scripting and found it to be both challenging and amazingly powerful.  All the work I’ve done in the past on sites like " +
                "CodeWars practicing Javascript problems all of a sudden is making sense as to its place as part of the larger puzzle. It’s also really awesome to " +
                "see how to use the dynamic Javascript templates to generate the page contents.  With all the coursework I’ve done at Codecademy I’ve never dove " +
                "into this crazy useful skill set. Looking at the Bloc-Jams page I’m just imagining how this could easily be transformed into a really useful page " +
                "for a band to show off their latest songs, have event listing and a blog.  It’ll be great once I get all the bones in place to really flesh it out" +
                " and make it something wonderfully unique.",
                image: '../assets/images/frankiejamsout(iPhone)(1).png'

            },
            {week: "Week 2: 1/30-2/5",
            contents: "This week has been non-stop first-assessment prep.  I wasn’t really sure what to expect other than knowing it was a video interview with " +
                "10-15 questions and coding challenges.  I was nervous going in but I aced it!  10 out of 10!  I’m very excited for next week and getting into the " +
                "actually building of websites! Bloc-Jams, here I come!",
                image: '../assets/images/fizzbuzz.png'

            },
            {week:"Week 1: 1/23-29",
                contents: "It’s finally starting! I met with my mentor, Caila, this morning. I found out she helps write the curriculum for the Software Development " +
                "track so I feel like I’m in good hands already.  This week and next are focused on fundamentals of front-end-- HTML5, CSS3 and Javascript.  I’ve " +
                "worked with all three in the past so I feel pretty good coming in with a bit of a foundation.  Though the course work I’ve been through before wasn’t" +
                " HTML5 specifically so there are lots of new elements and attributes to learn! One of the great things about Bloc is the interconnectedness of " +
                "students.  It would be easy in a one on one mentorship program to never talk to another student but there are a multitude of slack channels for a " +
                "variety of interests (including a local Chicago channel) as well as facebook groups and the like.",
                image: '../assets/images/cookies.png'

            }
        ];

        var recommendations =[
            {   id: 0,
                name: "Caree Davis",
                title: "Producer/Director",
                text: "Aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. " +
                "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
                "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus " +
                "viverra nulla ut metus varius laoreet. "},
            {   id: 1,
                name: "Kate Merena",
                title: "Owner- Sacred Art",
                text: "Consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et " +
                "magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis" +
                " enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam " +
                "dictum felis eu pede mollis pretium. Integer tincidunt."},
            {   id: 2,
                name: "Sara Jane",
                title: "Musician",
                text: "Nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa " +
                "quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. " +
                "Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. " +
                "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus " +
                "viverra nulla ut metus varius laoreet. "}
        ];

        Fixtures.currentCaseStudyObject = null;

        return{
            examples: caseStudies,
            blog: posts,
            pastClients: recommendations
        }
    }

    angular
        .module('Portfolio')
        .factory('Fixtures', Fixtures);
})();

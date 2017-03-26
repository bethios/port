(function() {
    function Fixtures() {

        var caseStudies = [
            {   Project: "Must Chat TV",
                Summary: "Must Chat TV is a web app built using AngularJS and firebase's database and authentication systems. Users can create an account, select or create chat rooms in real time and send messages. Admins have the ability to create private rooms for chosen users.",
                Problem: "Social media can be an overload, you are excited about the season premiere of your favorite show and you want to chat with your friends about it without having to scroll through your second counsins political rants on facebook. ",
                Solution: "Must Chat TV is solely dedicated to making the television watching experience more social. Chat with friends about the latest plot twists and dish on what you think will happen on next week's episode",
                Results: "The end result is a retro feel with modern features. Users can add rooms and admins can create private rooms for select users.",
                Conclusion: "Beginning user testing is positive, future features include admin's ability to delete rooms, ban users and for users to report abuse.",
                ipadView: '../../assets/images/mustChat-IPad.png',
                phoneView: '../../assets/images/mustChat-phone.png',
                laptopView: '../../assets/images/mustChat-laptop.png',
                thumbImage: '../../assets/images/mustchattv.png',
                github: 'https://github.com/bethios/mustchatTV',
                languageIcons: ['devicon-angularjs-plain','devicon-bootstrap-plain', 'devicon-css3-plain']
            },
            {   Project: "Frankie Jams Out",
                Summary: "Frankie Jams Out is a responsive music app built with JQuery and Buzz designed with parents and kids in mind. Users can stream unlimited on any device without an account, rate songs and create a cultivated playlist.",
                Problem: "Kid's music drives parents crazy and pressing shuffle on iTunes can lead to some interesting questions from the kiddos.",
                Solution: "Frankie Jams Out curates a selection of music that kids can sing along to but parent's won't mind hearing on repeat.",
                Results: "With the ability to customize your playlist, rate songs for the community and skip to your favorite part of the chorus there are features that both parents and kids will love",
                Conclusion: "As it turns out its easy enough for a four year old to use. Requests have included the ability to skip entire albums and user accounts to store preferences.",
                ipadView: '../../assets/images/frankieJams-iPad.png',
                phoneView: '../../assets/images/frankieJams-phone.png',
                laptopView: '../../assets/images/frankieJams-laptop.png',
                thumbImage: '../../assets/images/frankiejams.png',
                github: 'https://github.com/bethios/Frankie-Jams-Out',
                languageIcons: ['devicon-jquery-plain','devicon-bootstrap-plain', 'devicon-css3-plain']

            },

            {   Project: "Must Chat TV",
                Summary: "cool things here!",
                Problem: "more stuff!",
                Solution: "amazing",
                Results: "woa",
                Conclusion: "wowza",
                ipadView: '../../assets/images/mustChat-IPad.png',
                phoneView: '../../assets/images/mustChat-phone.png',
                thumbImage: '../../assets/images/mustchattv.png',
                github: 'https://github.com/bethios/Frankie-Jams-Out',
                languageIcons: ['devicon-angularjs-plain','devicon-bootstrap-plain', 'devicon-css3-plain']

            }

        ];

        var posts = [
            {   week: "Week 9: 3/20-26",
                contents: "Ruby time!  I’ve officially wrapped up the front-end module and I’m on to back end goodness with Ruby.  It’s strange, I learned " +
                "Javascript for the last year on my own so it feels like an friend, if I got stuck I knew exactly which sites to visit to get unstuck.  I knew " +
                "how to debug and to fiddle enough to not break anything.  Ruby is definitely starting from scratch in some ways.  Old habits die hard and I’m " +
                "definitely struggling to break some JS syntax habits.  Parenthesis and curly  braces for everywhere no longer! This week also began with an " +
                "intro to Test Driven Development which has been on my list of things I want to learn before getting into the real world.  It's very cool to " +
                "use but wrapping your brain on making tests that will fail will certainly take some practice. An invaluable tool to be sure. We’ve started " +
                "building a web based address book this week.  Lots of testing the program in the command line!"
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
                " I’m in love with Sass.  While trying to figure out a palette I stumbled to coolors.com and had a blast messing with their color palette generator"
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
                'option of creating private rooms for selected users.'
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
                "better user experience!"
            },
            {week: 'Week 5: 2/20-2/26',
            contents: "I finished my bloc-jams app and rebranded it to 'Frankie Jams Out'  it's gone from being a generic music player to one marketed " +
            "towards parents and kids. I had a great time restyling all the css and refactoring a lot of the jquery to make it cleaner and simpler to read." +
            "  Also tooled around with functionalities like making the volume and seek bars easier (and prettier) to use. Soon we will be remaking the site" +
            " once again using Angular. A brand new language! Add another tool to my toolbelt." +
            "I think if I have time I will come back to the project to add some additional functionalities like a search function, a mute button, and if I’m" +
            " feeling really crazy-- custom play lists!"
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
                " realize just how far she really had come.  Words of wisdom if you ask me."
            },
            {week: "Week 3: 2/6-2/12",
                contents: "This week I started work on Bloc-Jams, it's a online music player that allows you to stream your favorite music.  This is the first " +
                "time I’ve worked with DOM scripting and found it to be both challenging and amazingly powerful.  All the work I’ve done in the past on sites like " +
                "CodeWars practicing Javascript problems all of a sudden is making sense as to its place as part of the larger puzzle. It’s also really awesome to " +
                "see how to use the dynamic Javascript templates to generate the page contents.  With all the coursework I’ve done at Codecademy I’ve never dove " +
                "into this crazy useful skill set. Looking at the Bloc-Jams page I’m just imagining how this could easily be transformed into a really useful page " +
                "for a band to show off their latest songs, have event listing and a blog.  It’ll be great once I get all the bones in place to really flesh it out" +
                " and make it something wonderfully unique."
            },
            {week: "Week 2: 1/30-2/5",
            contents: "This week has been non-stop first-assessment prep.  I wasn’t really sure what to expect other than knowing it was a video interview with " +
            "10-15 questions and coding challenges.  I was nervous going in but I aced it!  10 out of 10!  I’m very excited for next week and getting into the " +
            "actually building of websites! Bloc-Jams, here I come!"
            },
            {week:"Week 1: 1/23-29",
                contents: "It’s finally starting! I met with my mentor, Caila, this morning. I found out she helps write the curriculum for the Software Development " +
                "track so I feel like I’m in good hands already.  This week and next are focused on fundamentals of front-end-- HTML5, CSS3 and Javascript.  I’ve " +
                "worked with all three in the past so I feel pretty good coming in with a bit of a foundation.  Though the course work I’ve been through before wasn’t" +
                " HTML5 specifically so there are lots of new elements and attributes to learn! One of the great things about Bloc is the interconnectedness of " +
                "students.  It would be easy in a one on one mentorship program to never talk to another student but there are a multitude of slack channels for a " +
                "variety of interests (including a local Chicago channel) as well as facebook groups and the like."
            }
        ];

        var recommendations =[
            {   id: 0,
                name: "Caree Davis",
                title: "Produce/Director",
                text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam " +
                "dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo " +
                "ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra " +
                "nulla ut metus varius laoreet."},
            {   id: 1,
                name: "Kate Merena",
                title: "Owner- Sacred Art",
                text: "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam " +
                "dictum felis eu pede mollis pretium. Vivamus elementum semper nisi. Aenean leo " +
                "ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra " +
                "nulla ut metus varius laoreet."},
            {   id: 2,
                name: "Sara Jane",
                title: "Musician",
                text: "DVivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo " +
                "ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra " +
                "nulla ut metus varius laoreet."}
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

(function() {
    function HomeCtrl(Fixtures, CaseStudy) {
        this.caseStudyData = Fixtures.examples;
        this.blogPosts = Fixtures.blog;
        this.testimonials = Fixtures.pastClients;
        this.resume = "https://resume.creddle.io/resume/1mroxkavjhq";

        this.setCurrentCaseStudy= function(index){
            Fixtures.currentCaseStudyObject = Fixtures.examples[index];
        };

        angular.element(function () {
            console.log("Hello and welcome to the guts of my portfolio! It gets lonely down here, the for loops aren't " +
                "very good conversationalists, they get repetitive, am I right? So stay a while! " +
                "Take a look around and for even more feel free to checkout www.github.com/bethios.  If you'd like to chat please shoot" +
                " me an email (bethios@gmail.com) Have a great day! Hope to talk to you soon!")
        });

    }

    angular
        .module('Portfolio')
        .controller('HomeCtrl',['Fixtures', 'CaseStudy' ,HomeCtrl]);
})();


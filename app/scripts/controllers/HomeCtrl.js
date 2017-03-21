(function() {
    function HomeCtrl(Fixtures, CaseStudy) {
        this.caseStudyData = Fixtures.examples;
        this.blogPosts = Fixtures.blog;
        this.testimonials = Fixtures.pastClients;

        this.setCurrentCaseStudy= function(index){
            Fixtures.currentCaseStudyObject = Fixtures.examples[index];
        };

    }

    angular
        .module('Portfolio')
        .controller('HomeCtrl',['Fixtures', 'CaseStudy' ,HomeCtrl]);
})();


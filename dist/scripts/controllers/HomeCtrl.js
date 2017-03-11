(function() {
    function HomeCtrl(Fixtures) {
        this.caseStudyData = Fixtures.examples;
        this.blogPosts = Fixtures.blog;

        this.setCurrentCaseStudy= function(index){
            this.currentCaseStudyObject= Fixtures.examples[index];
            console.log(this.currentCaseStudyObject.Project);
        };

        this.currentCaseStudyObject = null;

    }

    angular
        .module('Portfolio')
        .controller('HomeCtrl',['Fixtures', HomeCtrl]);
})();


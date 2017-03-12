(function() {
    function HomeCtrl(Fixtures, CaseStudy) {
        this.caseStudyData = Fixtures.examples;
        this.blogPosts = Fixtures.blog;

        this.setCurrentCaseStudy= function(index){
            //this.currentCaseStudyObject= Fixtures.examples[index];
            Fixtures.currentCaseStudyObject = Fixtures.examples[index];
            //console.log(Fixtures.currentCaseStudyObject.Project);
        };

        //this.currentCaseStudyObject = null;

    }

    angular
        .module('Portfolio')
        .controller('HomeCtrl',['Fixtures', 'CaseStudy' ,HomeCtrl]);
})();


(function() {
    function HomeCtrl(Fixtures) {
        this.caseStudyData = Fixtures.examples;
        this.blogPosts = Fixtures.blog;
    }

    angular
        .module('Portfolio')
        .controller('HomeCtrl',['Fixtures', HomeCtrl]);
})();


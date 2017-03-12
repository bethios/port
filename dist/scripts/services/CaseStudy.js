(function() {
    function CaseStudy($rootScope, Fixtures) {
        var CaseStudy = {};

        //this.setCurrentCaseStudy= function(index){
        //    this.currentCaseStudyObject= Fixtures.examples[index];
        //    console.log(this.currentCaseStudyObject.Project);
        //};

        //this.currentCaseStudyObject = $(HomeCtrl.currentCaseStudyObject) || null;


        return CaseStudy;
    }

    angular
        .module('Portfolio')
        .factory('CaseStudy', ['$rootScope', 'Fixtures', CaseStudy]);
})();

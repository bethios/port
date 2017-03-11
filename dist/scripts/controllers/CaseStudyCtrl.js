(function() {
    function CaseStudyCtrl(Fixtures) {
        this.setCurrentCaseStudy= function(index){
            this.currentCaseStudyObject= Fixtures.examples[index];
            console.log(this.currentCaseStudyObject.Results);
        };

        this.currentCaseStudyObject = null;

    }

    angular
        .module('Portfolio')
        .controller('CaseStudyCtrl',['Fixtures', CaseStudyCtrl]);
})();


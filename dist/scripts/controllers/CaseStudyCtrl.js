(function() {
    function CaseStudyCtrl(Fixtures) {
        this.currentCaseStudyObject = Fixtures.currentCaseStudyObject || null;

    }

    angular
        .module('Portfolio')
        .controller('CaseStudyCtrl',['Fixtures', CaseStudyCtrl]);
})();


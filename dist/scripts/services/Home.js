(function() {
    function Home($rootScope, Fixtures) {
        var Home = {};


        return Home;
    }

    angular
        .module('Portfolio')
        .factory('Home', ['$rootScope', 'Fixtures', Home]);
})();

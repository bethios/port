(function() {
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};


        return SongPlayer;
    }

    angular
        .module('Portfolio')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
})();

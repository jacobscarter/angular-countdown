describe('AngularCountdown', function() {
    var $compile, $rootScope;

    beforeEach(module('angular-countdown'));


    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    function createView(scope) {;
        var element = angular.element('<countdown stopdate="7/15/2015 11:00 AM"></countdown>');
        var elementCompiled = $compile(element)(scope);
        $rootScope.$digest();
        return elementCompiled;
    }

});

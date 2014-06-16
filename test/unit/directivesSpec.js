'use strict';

/* jasmine specs for directives go here */

describe('Version directive', function() {

	var elm, scope;
    beforeEach(module('versionApp'));

    it('test', inject(function($compile, $rootScope) {
        var scope = $rootScope.$new();
        var element = $compile('<version-directive data="version"></version-directive>')(scope);
        
        var buttons = element.find('button');
        expect(buttons.length).toBe(1);

        var inputs = element.find('input');
        expect(inputs.length).toBe(3);

        scope.$apply();
        expect(buttons.eq(0).text()).toBe('v0.0.0');
    }));
});

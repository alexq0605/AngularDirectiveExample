module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      "http://code.angularjs.org/1.2.1/angular.js",
      "http://code.angularjs.org/1.2.1/angular-mocks.js",
      "test/unit/directivesSpec.js",
      "directives.js"
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
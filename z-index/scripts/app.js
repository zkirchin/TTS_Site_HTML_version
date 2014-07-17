'use strict';

angular.module('ttsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $provide) {
    $provide.decorator('$sniffer', function($delegate) {
      $delegate.history = false;
      return $delegate;
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/webdev', {
        templateUrl: 'views/main_includes/web_dev.html',
        controller: 'MainCtrl'
      })
      .when('/youthcode', {
        templateUrl: 'views/youthcode.html',
        controller: 'YouthCampCtrl'
      })
      .when('/college-cram', {
        templateUrl: 'views/college-cram.html',
        controller: 'CollegeCramCtrl'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FAQCtrl'
      })
      .when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl'
      })
      .when('/alumni', {
        templateUrl: 'views/alumni.html',
        controller: 'AlumniCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  });
  

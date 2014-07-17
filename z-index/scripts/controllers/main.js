'use strict';

angular.module('ttsApp')

  .controller('MainCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $anchorScroll, $location) {

    //DROPDOWN

    $scope.dropdownLinks = [
        {"title": "Youth Code Camps", "url": "/youthcode"},
        {"title": "College Cram Session", "url": "/college-cram"}
    ];

    //DATA
    $scope.masks = [
    {
    	'image': 'assets/img/step1.png',
    	'title': 'Connect',
    	'content': "We provide access to networking opportunities, educational events, cutting edge companies, and local entrepreneurs. Our supportive, non-intimidating, and collaborative community is filled with passionate, like-minded students on their way to doing great things. Along the way, you'll get the mentoring you need from local professionals in relevant fields and the Tech Talent South staff."
    },
    {
    	'image': 'assets/img/step2.png',
    	'title': 'Plan',
    	'content': "Have a great idea for the next big thing? Haven't known how to start? This is when the sketching begins. The design process never begins in front of the computer. Tech Talent South will teach you how to map out and execute a plan, taking your idea all the way from inception to launch."
    },
    {
    	'image': 'assets/img/step3.png',
    	'title': 'Execute',
    	'content': "We teach you all the languages and skills you'll need to turn your idea into a reality. From domain modeling to database management, we'll show you the back-end of web application development. And, of course, it has to look pretty. We'll show you the tricks of front-end design in order to create a great user experience."
    },
    {
    	'image': 'assets/img/step4.png',
    	'title': 'Launch',
    	'content': "Ship your MVP (minimum viable product) to the web, get feedback, refine and iterate. Get additional web application users on board, practice your pitch, and start your business...the sky is the limit!"
    }
    ];

    $scope.affiliates = [
        {
            'name': 'Technology Association of Georgia',
            'img': 'assets/img/tag-ed-logo.jpg',
            'link': 'http://www.tagonline.org/'
        },
        {
            'name': 'Mojo Coworking',
            'img': 'assets/img/mojo.png',
            'link': 'http://mojocoworking.com/'
        },
        {
            'name': 'Industry Coworking',
            'img': 'assets/img/industry_charlotte.png',
            'link': 'http://industrycharlotte.com/'
        },
        {
            'name': 'AB Tech Center for Professional Studies',
            'img': 'assets/img/ab-tech.png',
            'link': 'http://www.abtech.edu/'
        },
        {
            'name': 'Hands on Tech Atlanta',
            'img': 'assets/img/HOT-ATL.png',
            'link': 'http://www.handsonatlanta.org/HOC__Affiliate_Home_Page'
        }
    ];
  }])
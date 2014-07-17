angular.module('ttsApp')

.controller('AboutCtrl', ['$scope', function($scope){

	$scope.staffs = [
		{
			'name': 'Richard Simms',
			'img': 'assets/img/Team/richard2.jpg',
			'role': 'Cofounder',
			'bio': "An Atlanta native, Richard spent the first several years of his career in technology working with Cvent, a SaaS company based in Washington, DC. During his four years there, Cvent raised a hefty investment, rolled out new products, and experienced massive growth, ultimately leading to an IPO. Swept up in the excitement, Richard caught the tech bug (big time) and hasn’t looked back since! Following his time at Cvent, Richard worked with an early stage startup called HighGround based in Chicago. After helping to raise an initial investment round, the next step was naturally...to hire developers and build the product! With that, Richard stumbled into the world of web development and his hunger for learning to “code” was born. Looking to take his skills to the next level, Richard enrolled in an immersive web development program in Chicago, met Betsy, and the rest is history. As the only two southerners in the program, they bonded over their love for code, startups, and their mutual desire to put the South on the map as the next great tech hub."
		},

		{
			'name': 'Betsy Hauser Idilbi',
			'img': 'assets/img/Team/betsy.jpg',
			'role': 'Cofounder',
			'bio': "Before launching Tech Talent South, Betsy successfully ran Little Idea, a Charlotte-based, physical product development company. Her efforts culminated with a merger with product development giant Enventys. After the merger, Betsy decided to get back to her entrepreneurial roots and left for Chicago to learn to code in an immersive program (where she met Richard Simms, the only other Southerner). Together, they decided to launch their own series of bootcamps and started TTS to bring tech instruction to and grow talent in the South. Betsy has served (or currently serves) as a Founders' Institute Mentor, Charlotte Venture Challenge Judge, Charlotte Global Shapers Mentor, and Speaker for Startup Weekend. When Betsy isn't busy with TTS, she can be found at local brewery runs, dominating her awesome husband (or really anyone for that matter) in foosball, and playing with her two favorite mutts, Coney & Lil 'Wheezy."
		},


		{
			'name': 'Abby Miressi',
			'img': 'assets/img/Team/Abby.jpg',
			'role': 'Progam Director',
			'bio': ''
		},

		

		{
			'name': 'Laura White',
			'img': 'assets/img/Team/Laura.jpg',
			'role': 'Social Media Maven',
			'bio': ''
		},

		{
			'name': 'Sarah Hudson',
			'img': 'assets/img/Team/sarah.jpg',
			'role': 'TA',
			'bio': "Sarah Hudson is a native Charlottean and a long-time 'techy.' With a background in Web Technologies and Design, she started out as a graphic and web designer for local Charlotte product development company Little Idea and went on to work as the lead graphic designer at Enventys. Eager to learn more about the web and software development side of things, Sarah joined the first TTS crew to learn Ruby on Rails in Atlanta. Now she works as a web and software developer at CheckAppointments, a SaaS company in Charlotte. In her free time, she loves discovering new music, ballroom dancing, exploring nature, and learning new programming techniques."
		},

		{
			'name': 'Aaron Groch',
			'img': 'assets/img/Team/aaron.jpg',
			'role': 'TA',
			'bio': "Aaron came to TTS after leaving the CS program at GSU to focus on web development. His favorite part of the program was getting to know Ruby on Rails. Aaron is currently in an internship with Toolbox No. 9, an awesome ATL web dev shop."
		},
		{
			'name': 'Alex Edelstein',
			'img': 'assets/img/Team/intern-alex.jpg',
			'role': 'Intern - College Cram Sessions Coordinator',
			'bio': ''
		},
		{
			'name': 'Antoinette Stevens',
			'img': 'assets/img/Team/intern-antoinette.jpg',
			'role': 'Intern - Youth Camps Coordinator',
			'bio': ''
		},
	];


	$scope.instructors = [
        {
            'name': 'TJ Muehleman',
            'image': 'assets/img/tj.jpg',
            'bio': "TJ can usually be found in one of three places: chasing his dogs around the yard, figuring out how not to lose a finger with the new saw he got for Christmas, or sitting in front of his laptop coding the next billion dollar idea -- or, as is often for TJ, the next thousand dollar idea. A native Texan, TJ's been a working developer for over 15 years and loves helping new coders figure out what a for loop actually does. TJ is also Co-founder of We&Co and Standard Code."
        },
        {
            'name': 'Robby Ranshous',
            'image': 'assets/img/robby.jpg',
            'bio': "Code laureate. A lover of events, genetic algorithms, and empowering people with knowledge, Robby can be found most days walking the streets of Atlanta, slaving away over a hot keyboard, or spending time with his beautiful wife Elizabeth. Robby lovingly crafts his lessons from more than 10 years of experience designing and building production web applications. Robby is currently a Senior Software Engineer at Kevy."
        },
        {
            'name': 'Nathan Batson',
            'image': 'assets/img/nathan.jpg',
            'bio': "Nathan Batson is a WNC native, born and raised, educated at UNC Asheville with a background in Art, Computer Science, and 3D Animation. Nathan's 10 years of web experience started with Flash, before it was a dirty word, and transitioned to traditional full stack web development. For the last 5 years he has been a professional Ruby on Rails developer. After hours he spends time with his awesome wife Rebecca, drawing bad puns in Adobe Illustrator, cycling on the parkway, wasting time playing PC games, and building pet programming projects.  Nathan is currently a full time contractor for Zamzee.com."
        },
        {
        	'name': 'Scott Harman',
        	'image': 'assets/img/scott.jpg',
        	'bio': "All around happy-go-lucky person who thrives off the energy of others!  Most of Scott's professional life has been spent in successful—but unfulfilling—roles as a sale/finance manager and more recently as a commodities trader. After a serious health scare left him pondering the meaning of life, he decided to pursue career happiness through code and began preparing for a career in software development by attending a Ruby on Rails immersive bootcamp where he discovered his love for teaching others and helping awesome people achieve their dreams. He lives in Raleigh with his wife of 22 years and enjoys an active lifestyle full of family, friends, fitness, travel, adventure and will most notably be anyone’s buddy if they buy him a beer!"
        }
    ];

}])
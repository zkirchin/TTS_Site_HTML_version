
jQuery(document).ready(function($) {


	"use strict";


	// Drawer Sidebar
	var sidebar = document.getElementById( 'sidebar' );
	var button = document.getElementById( 'toggle' );
	var body = document.body;

	button.onclick = function() {
		classie.toggle( this, 'active' );
		classie.toggle( body, 'push' );
		classie.toggle( sidebar, 'open' );
		disable( 'toggle' );
	};

	function disable( button ) {
		if ( button !== 'toggle' ) {
			classie.toggle( button, 'disabled' );
		}
	}


	// Gallery Post Format Slider
	$(window).load(function() {
	  $('.flexslider').flexslider({
		slideshow: false,
		controlNav: false,
	    animation: "slide",
		animationSpeed: 250,
		smoothHeight: true,
		prevText: '<i class="fa fa-angle-left"></i>',
		nextText: '<i class="fa fa-angle-right"></i>'
	  });
	});


	// Mobile Menu
    $('#nav').slicknav({
    	prependTo: 'body',
    	label: '',
    	allowParentLinks: 'true',
		closedSymbol: '<i class="fa fa-caret-down"></i>',
		openedSymbol: '<i class="fa fa-caret-up"></i>'
    });


	// Make Videos Responsive
	$('.entry-image').fitVids();


	// Portfolio Filter Sorting
	$('.portfolio-container').isotope({
		resizable: true,
		layoutMode: 'fitRows'
	});

	$('.portfolio-filter a').click(function(e) {
		if( $('body').hasClass('tax-portfolio-type') ) {
			return;
		}
		// do the filter
		var selector = $(this).attr('data-filter');
		$('.portfolio-container').isotope({ filter: selector });

		// update filter class
		$('.portfolio-filter a').removeClass('active');
		$(this).addClass('active');

		// prevent default click
		e.preventDefault();
		return false;
	});

});

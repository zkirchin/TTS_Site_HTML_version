<?php

/* ----------------------------------------------------------------

   Name: Mighty Theme Options
   URI: http://meetmighty.com/
   Description: Add options to theme
 
-----------------------------------------------------------------*/


/* ----------------------------------------------------------------
   UNIQUE IDENTIFIER
-----------------------------------------------------------------*/

function optionsframework_option_name() {

	// This gets the theme name from the stylesheet
	$themename = wp_get_theme();
	$themename = preg_replace( "/\W/", "_", strtolower( $themename ) );

	$optionsframework_settings = get_option( 'optionsframework' );
	$optionsframework_settings['id'] = $themename;
	update_option( 'optionsframework', $optionsframework_settings );
}


/* ----------------------------------------------------------------
   THEME OPTIONS
-----------------------------------------------------------------*/

function optionsframework_options() {

	// Get Pages
	$options_pages = array();
	$options_pages_obj = get_pages( 'sort_column=post_parent,menu_order' );
	$options_pages[''] = 'Select a page:';
	foreach ( $options_pages_obj as $page ) {
		$options_pages[$page->ID] = $page->post_title;
	}

	// If using image radio buttons, define a directory path
	$imagepath =  get_template_directory_uri() . '/includes/framework/images/';

	// Define values for editor use in theme options
	$wp_editor_settings = array(
		'wpautop' => false,
		'textarea_rows' => 2,
		'tinymce' => array( 'plugins' => 'wordpress' )
	);

	$options = array();


	// General

	$options[] = array(
		'name' => __('General', 'options_framework_theme'),
		'type' => 'heading');

	$options[] = array(
		'name' => __('Plain Text Logo', 'options_framework_theme'),
		'desc' => __('Check this box if you would like to use a plain text logo.', 'options_framework_theme'),
		'id' => 'logo-plain',
		'type' => 'checkbox');

	$options[] = array(
		'name' => __('Upload Custom Logo', 'options_framework_theme'),
		'desc' => __('Upload a custom logo to use in the themes header.', 'options_framework_theme'),
		'id' => 'logo-custom',
		'type' => 'upload');

	$options[] = array(
		'name' => __('Upload Custom Favicon', 'options_framework_theme'),
		'desc' => __('Upload a 16x16 pixel .GIF or .PNG image to replace the default favicon.', 'options_framework_theme'),
		'id' => 'custom-favicon',
		'type' => 'upload');

	$options[] = array(
		'name' => __('FeedBurner URL', 'options_framework_theme'),
		'desc' => __('Enter your full URL of your FeedBurner feed (or any other preferred feed URL).', 'options_framework_theme'),
		'id' => 'feedburner-url',
		'type' => 'text');

	$options[] = array(
		'name' => __('Site Analytics', 'options_framework_theme'),
		'desc' => __('Enter in the code snippet for any site analytics (Google or other).', 'options_framework_theme'),
		'id' => 'footer-scripts',
		'type' => 'textarea');


	// Style

	$options[] = array(
		'name' => __('Style', 'options_framework_theme'),
		'type' => 'heading');

	$options[] = array(
		'name' => __('Link & Accent Color', 'options_framework_theme'),
		'desc' => __('This changes both the link and accent color used in the theme.', 'options_framework_theme'),
		'id' => 'accent-color',
		'std' => '#2aa157',
		'type' => 'color' );

	$options[] = array(
		'name' => __('Custom CSS', 'options_framework_theme'),
		'desc' => __('Enter any small style (CSS) changes you would like toe either add or overwrite. If there are many changes, please consider <a href="http://codex.wordpress.org/Child_Themes">creating a child theme</a>.', 'options_framework_theme'),
		'id' => 'custom-css',
		'type' => 'textarea');


	// Footer

	$options[] = array(
		'name' => __('Copyright Information', 'options_framework_theme'),
		'type' => 'info');

	$options[] = array(
		'name' => __('Footer Copyright Text', 'options_framework_theme'),
		'desc' => __('Changes the actual copyright text in the site footer.', 'options_framework_theme'),
		'id' => 'copyright-text',
		'type' => 'textarea');


	return $options;
}
<?php

define( 'THEMEROOT', get_stylesheet_directory_uri() );
define( 'IMAGES', THEMEROOT . '/images' );
define( 'JS', THEMEROOT . '/js' );
define( 'CSS', THEMEROOT . '/css' );

// support feature image.
add_theme_support( 'post-thumbnails' );
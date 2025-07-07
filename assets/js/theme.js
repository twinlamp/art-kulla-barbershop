/* =================================================================
* Template JS
* 
* Template:    Waal - Portfolio Showcase HTML Website Template
* Author:      Themetorium
* URL:         https://themetorium.net/
*
================================================================= */


/* Table of Content
====================
# Page transitions / preloader
# Smooth scrolling
# Header
# Overlay menu
# Page header
# jQuery Lazy
# Isotope
# lightGallery
# OWL Carousel
# Content toggle
# Counter-Up
# YTPlayer
# Defer videos
# Remove input placeholder on focus
# uniMail
# Footer
# Scroll to top button
# Miscellaneous
*/


(function ($) {
	'use strict';


	// ===============================================
	// Page transitions / preloader (Animsition)
	// More info: http://git.blivesta.com/animsition/
	// ===============================================

	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 800,
		outDuration: 500,
		// linkElement:   '.animsition-link',
		linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class*="lg-trigger"])', // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'html', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '<img src="assets/img/page-loader.gif" />', // e.g '<img src="assets/img/page-loader.gif" />'
		timeout: true,
		timeoutCountdown: 4000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'], // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		
		overlay : false,
		overlayClass : 'animsition-overlay-slide',
		overlayParentElement : 'html',
		transition: function(url){ window.location.href = url; }
	});



	// ====================================
	// Smooth scrolling (on element click)
	// ====================================

	$('.sm-scroll').on("click",function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top
				}, 800);
				return false;
			}
		}
	});



	// ===================================================
	// Header
	// ===================================================

	// if #header contains class "header-fixed-top" add class "header-fixed-top-on" to <pody>.
	if ($('#header').hasClass('header-fixed-top')) {
		$('body').addClass('header-fixed-top-on');
	}

	// if #header contains class "header-show-hide-on-scroll" add class "header-show-hide-on-scroll-on" to <pody>.
	if ($('#header').hasClass('header-show-hide-on-scroll')) {
		$('body').addClass('header-show-hide-on-scroll-on');
	}

	// if #header contains class "header-transparent" add class "header-transparent-on" to <pody>.
	if ($('#header').hasClass('header-transparent')) {
		$('body').addClass('header-transparent-on');
	}


	// Hide header on scroll down, show on scroll up
	// More info: https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
	// ===================================================
	var didScroll;
	var lastScrollTop = 0;
	var delta = 120;
	var navbarHeight = $('.header-show-hide-on-scroll').outerHeight();

	$(window).on("scroll",function(event) {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 50);

	function hasScrolled() {
		var st = $(window).scrollTop();
	  
		// Make sure they scroll more than delta
		if(Math.abs(lastScrollTop - st) <= delta)
			return;

			// If they scrolled down and are past the header, add class .fly-up.
			// This is necessary so you never see what is "behind" the header.
			if (st > lastScrollTop && st > navbarHeight){
				// Scroll Down
				$('.header-show-hide-on-scroll').addClass('fly-up');
			} else {
			// Scroll Up
			if(st + $(window).height() < $(document).height()) {
				$('.header-show-hide-on-scroll').removeClass('fly-up');
			}
		}

		lastScrollTop = st;
	}


	// Header Filled (cbpAnimatedHeader) 
	// More info: http://tympanus.net/codrops/2013/06/06/on-scroll-animated-header/
	// ====================================
	var cbpAnimatedHeader = (function() {

		var docElem = document.documentElement,
			header = document.querySelector( '#header' ),
			didScroll = false,
			changeHeaderOn = 1;

		function init() {
			window.addEventListener( 'scroll', function( event ) {
				 if( !didScroll ) {
					  didScroll = true;
					  setTimeout( scrollPage, 300 );
				 }
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ($(this).scrollTop() > 80){  
				$('#header.header-fixed-top, #header.header-show-hide-on-scroll').addClass("header-filled");
			}
			else{
				$('#header.header-fixed-top, #header.header-show-hide-on-scroll').removeClass("header-filled");
			}
				didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();


	// Header attributes
	// ==================

	// Header attributes search toggle trigger
	$('.header-search-trigger').on('click', function() {
		$('body').addClass('header-search-open');

		return false;    
	});

	// Header attributes search close button
	$('.header-search-close').on('click', function() {
		$('body').removeClass('header-search-open');
	});

	// Header attributes search close on outside click
	$(document).on('click', function(event) {
		if (!$(event.target).closest('.header-search').length)  {
			$('body').removeClass('header-search-open');
		}
	});


	
	// =========================================================================
	// Overlay menu
	// =========================================================================

	$('#tt-overlay-menu').prependTo('body');

	// overlay menu body cover
	if ($('#tt-overlay-menu').is('.olm-slide-left-half, .olm-slide-right-half')) {
		$('body').prepend('<span class="tt-ol-menu-body-cover"></span>');
	}

	// overlay menu trigger click
	$('#tt-ol-menu-trigger').on("click",function() {
		$('body').addClass('tt-ol-menu-open');

		return false;
	});

	// overlay menu close button click
	$('.tt-ol-menu-close').on("click",function() {
		$('body').removeClass('tt-ol-menu-open');
	});

	// close overlay menu on outside click
	$(document).on("click",function(e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("tt-ol-menu")) {
			// close menu
			$('body').removeClass('tt-ol-menu-open');
		}
	});


	// Sub menu caret
	// ===============
	// Add caret (little arrow icon) if menu link contains dropdown
	$('#tt-overlay-menu .has-children > a').append('<span class="tt-caret"></span>');


	// Sub menu on click / on hover)
	// ==============================
	if ($('#tt-overlay-menu').hasClass('olm-submenu-hover')) {

		// sub menu (on hover)
		$('#tt-overlay-menu .has-children > a').on('mouseenter', function(){
			$(this).next('.tt-ol-sub-menu').stop(true).delay(200).slideDown(300);
		});
		$('#tt-overlay-menu .has-children').on('mouseleave', function(){
			$('.tt-ol-sub-menu').stop(true).delay(200).slideUp(300);
		});

	} else {

		// sub menu (on click)
		$('#tt-overlay-menu .has-children > a').on('click', function(){
			// slide up all the submenus
			$("#tt-overlay-menu .tt-ol-sub-menu").slideUp(300);
			// slide down submenus - only if its closed
			if(!$(this).next().is(":visible")){
				$(this).next().slideDown(300);
			}
			return false;
		})

		// close sub menu on outside click
		$(document).on("click",function(e) {
			var $clicked = $(e.target);
			if (!$clicked.parents().hasClass("tt-ol-menu-list")) {
				// close menu
				$("#tt-overlay-menu .tt-ol-sub-menu").slideUp(300);
			}
		});

	}



	// ===============================
	// Page header
	// ===============================

	// if #page-header exist add class "page-header-on" to <body>.
	if ($('#page-header').length) {
		$('body').addClass('page-header-on');
	}

	// if page header contains image add class "page-header-image-on" to <body>.
	if ($('.page-header-image').length) {
		$('body').addClass('page-header-image-on');
	}

	// if #page-header contains class "ph-full" add class "ph-full-on" to <body>.
	if ($('#page-header').hasClass('ph-full')) {
		$('body').addClass('ph-full-on');
	}

	// if #page-header contains class "ph-full-m" add class "ph-full-m-on" to <body>.
	if ($('#page-header').hasClass('ph-full-m')) {
		$('body').addClass('ph-full-m-on');
	}

	// if .page-header-caption contains class "ph-cap-light" add class "ph-cap-light-on" to <body>.
	if ($('.page-header-caption').hasClass('ph-cap-light')) {
		$('body').addClass('ph-cap-light-on');
	}


	// Parallax scrolling effect (transform) 
	// =======================================

	$(window).on("scroll",function() {
		var plxScroll = $(this).scrollTop();

		$('.parallax-1').css('transform', 'translate3d(0, '+ ((plxScroll * 0.1)) +'px, 0)');
		$('.parallax-2').css('transform', 'translate3d(0, '+ ((plxScroll * 0.2)) +'px, 0)');
		$('.parallax-3').css('transform', 'translate3d(0, '+ ((plxScroll * 0.3)) +'px, 0)');
		$('.parallax-4').css('transform', 'translate3d(0, '+ ((plxScroll * 0.4)) +'px, 0)');
		$('.parallax-5').css('transform', 'translate3d(0, '+ ((plxScroll * 0.5)) +'px, 0)');
		$('.parallax-6').css('transform', 'translate3d(0, '+ ((plxScroll * 0.6)) +'px, 0)');
		$('.parallax-7').css('transform', 'translate3d(0, '+ ((plxScroll * 0.7)) +'px, 0)');
		$('.parallax-8').css('transform', 'translate3d(0, '+ ((plxScroll * 0.8)) +'px, 0)');
	});

	// Disable parallax effect on mobile devices (use class "no-parallax-m").
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
	if(isMobile) {

		var $disableParallax = $('[class*="parallax-"]');

		$disableParallax.each(function() {
			if ($(this).hasClass('no-parallax-m')) {
					$(this).removeClass(function (index, css) {
						return (css.match (/\bparallax-\S+/g) || []).join(' '); // removes anything that starts with "parallax-"
					});
			}
		});
	}

	// Disable parallax effect on IE browser.
	if(navigator.userAgent.match(/Trident\/7\./)) { // if IE

		var $disableParallax = $('[class*="parallax-"]');
		
		$disableParallax.each(function() {
			$(this).removeClass(function (index, css) {
				return (css.match (/\bparallax-\S+/g) || []).join(' '); // removes anything that starts with "parallax-"
			});
		});
	}


	// if element contains class ".parallax-*" add css minus top and bottom equal to "#header" height.
	// =================================================================================================
	$(window).on("resize",function() {

		if ($('.page-header-image').is('[class*="parallax-"]')) {
			$('.page-header-image').css({
				'top': - $("#header").height() + "px",
				'bottom': - $("#header").height() + "px"
			});
		}

		// if "#header" contains class ".header-transparent".
		if ($(window).width() > 992) {
			if ($('#header').hasClass('header-transparent')) {
				$('.page-header-image').css({
					'top': '0',
					'bottom': '0'
				});
			}
		}

	}).resize();


	// Element fade out scrolling effect
	// ===================================

	$(window).on("scroll",function() {
		$(".fade-out-scroll-1").css("opacity", 1 - $(window).scrollTop() / 150);
		$(".fade-out-scroll-2").css("opacity", 1 - $(window).scrollTop() / 250);
		$(".fade-out-scroll-3").css("opacity", 1 - $(window).scrollTop() / 350);
		$(".fade-out-scroll-4").css("opacity", 1 - $(window).scrollTop() / 450);
		$(".fade-out-scroll-5").css("opacity", 1 - $(window).scrollTop() / 550);
		$(".fade-out-scroll-6").css("opacity", 1 - $(window).scrollTop() / 650);
		$(".fade-out-scroll-7").css("opacity", 1 - $(window).scrollTop() / 750);
		$(".fade-out-scroll-8").css("opacity", 1 - $(window).scrollTop() / 850);
	});

	// Disable fade out scrolling effect on mobile devices (use class "no-fade-out-scroll-m").
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
	if(isMobile) {

		var $disableFadeOutScroll = $('[class*="fade-out-scroll-"]');

		$disableFadeOutScroll.each(function() {
			if ($(this).hasClass('no-parallax-m')) {
					$(this).removeClass(function (index, css) {
						return (css.match (/\bfade-out-scroll-\S+/g) || []).join(' '); // removes anything that starts with "fade-out-scroll-"
					});
			}
		});
	}



	// ===================================================================================
	// jQuery Lazy (lazy-loading plugin)
	// More info: http://jquery.eisbehr.de/lazy/
	// ===================================================================================

	var $LazyInstance = $('.lazy').lazy({
		chainable: false, // Tell lazy to return its own instance (important for Isotope).
		effect: 'fadeIn', // Function name of the effect you want to use to show the loaded images, like show or fadein.
		effectTime: 400, // Time in milliseconds the effect should use to view the image.
		visibleOnly: true, // Determine if only visible elements should be load.
		threshold: 500, // Amount of pixels below the viewport, in which all images gets loaded before the user sees them.
		enableThrottle: true, // Throttle down the loading calls on scrolling event.
		throttle: 250, // Time in milliseconds the throttle will use to limit the loading calls.
		beforeLoad: function(element) {
			// called before an elements gets handled
			element.addClass('lazy-loader');
		},
		afterLoad: function(element) {
			// called after an element was successfully handled
			element.removeClass('lazy-loader');
		},
		onError: function(element) {
			// called whenever an element could not be handled
			console.log('error loading ' + element.data('src'));
			
			element.removeClass('lazy-loader').addClass('lazy-error');
		}
	});



	// ===================================================================================
	// Isotope
	// More info: http://isotope.metafizzy.co
	// Note: "imagesloaded" blugin is required: https://github.com/desandro/imagesloaded
	// ===================================================================================

	// init Isotope.
	var $container = $('.isotope-items-wrap');
	$container.imagesLoaded(function() {
		$container.isotope({
			itemSelector: '.isotope-item',
			transitionDuration: '0.7s',
			masonry: {
				columnWidth: '.grid-sizer',
				horizontalOrder: false
			}
		});
	});

	// Filter links.
	$('.isotope-filter-links button').on("click",function() {
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector
		});

		// Scroll to top on filter link click.
		if ($('.isotope-filter').hasClass('fi-btn')) {
			$([document.documentElement, document.body]).animate({
				scrollTop: $(".isotope-top-content").offset().top -180 // top offset.
			}, 800);

		} else {

			$([document.documentElement, document.body]).animate({
				scrollTop: $(".isotope-top-content").offset().top -80 // top offset.
			}, 800);

		}

		return false;
	});

	// Filter links active.
	var filterItemActive = $('.isotope-filter-links button');
	filterItemActive.on('click', function(){
		var $this = $(this);
		if ( !$this.hasClass('active')) {
			filterItemActive.removeClass('active');
			$this.addClass('active');
		}
	});

	// Load lazy items after a layout and all positioning transitions have completed (works with "jQuery Lazy" plugin).
	$container.on( 'layoutComplete', function( event, laidOutItems ) { 
		$LazyInstance.update(); 
	});


	// If "isotope-top-content" exist add class ".iso-top-content-on" to <body>.
	if ($('.isotope-top-content').length) {
		$('body').addClass('iso-top-content-on');
	}

	// If ".isotope-filter" contains class "fi-btn" add class "fi-btn-on" to <body> tag.
	if ($('.isotope-filter').hasClass('fi-btn')) {
		$('body').addClass('fi-btn-on');
	}

	// Filter button clickable/hover (clickable on small screens).
	if ($(window).width() < 992) {

		// Filter button clickable (effect only on small screens).
		$('.isotope-filter-button').on("click",function() {
			$('body').toggleClass('iso-filter-open');
		});

		// Close filter button if click on filter links (effect only on small screens).
		$('.isotope-filter-links button').on("click",function() {
			$("body").removeClass('iso-filter-open');
		});

	} else {

		// Filter button on hover.
		$('.isotope-filter.fi-btn').on("mouseenter",function(){
			$('body').addClass('iso-filter-open');
		}).on("mouseleave",function(){
			$('body').removeClass('iso-filter-open');
		});

	}


	// if class "isotope" exist.
	if ($('.isotope').length){
		
		// add overflow scroll to <html> (isotope items gaps fix). Uncomment if needed.
		// if ( document.querySelector('body').offsetHeight > window.innerHeight ) {
		// 	document.documentElement.style.overflowY = 'scroll';
		// }

		// Add class "isotope-on" to <body>.
		$('body').addClass('isotope-on');
	}


	// Add class "iso-gutter-*-on" to <body> if ".isotope" contains class "gutter-*".
	if ($('.isotope').hasClass('iso-gutter-1')) {
		$('body').addClass('iso-gutter-1-on');
	}

	if ($('.isotope').hasClass('iso-gutter-2')) {
		$('body').addClass('iso-gutter-2-on');
	}

	if ($('.isotope').hasClass('iso-gutter-3')) {
		$('body').addClass('iso-gutter-3-on');
	}

	if ($('.isotope').hasClass('iso-gutter-4')) {
		$('body').addClass('iso-gutter-4-on');
	}

	if ($('.isotope').hasClass('iso-gutter-5')) {
		$('body').addClass('iso-gutter-5-on');
	}

	if ($('.isotope').hasClass('iso-gutter-6')) {
		$('body').addClass('iso-gutter-6-on');
	}



	// =====================================================
	// lightGallery (lightbox plugin)
	// Source: http://sachinchoolur.github.io/lightGallery
	// =====================================================

	$(".lightgallery").lightGallery({

		// Please read about gallery options here: http://sachinchoolur.github.io/lightGallery/docs/api.html

		// lightgallery core 
		selector: '.lg-trigger',
		mode: 'lg-fade', // Type of transition between images ('lg-fade' or 'lg-slide').
		height: '100%', // Height of the gallery (ex: '100%' or '300px').
		width: '100%', // Width of the gallery (ex: '100%' or '300px').
		iframeMaxWidth: '100%', // Set maximum width for iframe.
		loop: true, // If false, will disable the ability to loop back to the beginning of the gallery when on the last element.
		speed: 600, // Transition duration (in ms).
		closable: true, // Allows clicks on dimmer to close gallery.
		escKey: true, // Whether the LightGallery could be closed by pressing the "Esc" key.
		keyPress: true, // Enable keyboard navigation.
		hideBarsDelay: 3000, // Delay for hiding gallery controls (in ms).
		controls: true, // If false, prev/next buttons will not be displayed.
		mousewheel: true, // Chane slide on mousewheel.
		download: false, // Enable download button. By default download url will be taken from data-src/href attribute but it supports only for modern browsers. If you want you can provide another url for download via data-download-url.
		counter: true, // Whether to show total number of images and index number of currently displayed image.
		swipeThreshold: 50, // By setting the swipeThreshold (in px) you can set how far the user must swipe for the next/prev image.
		enableDrag: true, // Enables desktop mouse drag support.
		enableTouch: true, // Enables touch support.
		getCaptionFromTitleOrAlt: false, // Option to get captions from alt or title tags.

		// thumbnail plugin
		thumbnail: true, // Enable thumbnails for the gallery.
		showThumbByDefault: false, // Show/hide thumbnails by default.
		thumbMargin: 5, // Spacing between each thumbnails.
		toogleThumb: true, // Whether to display thumbnail toggle button.
		enableThumbSwipe: true, // Enables thumbnail touch/swipe support for touch devices.
		exThumbImage: 'data-exthumbnail', // If you want to use external image for thumbnail, add the path of that image inside "data-" attribute and set value of this option to the name of your custom attribute.

		// autoplay plugin
		autoplay: false, // Enable gallery autoplay.
		autoplayControls: true, // Show/hide autoplay controls.
		pause: 6000, // The time (in ms) between each auto transition.
		progressBar: true, // Enable autoplay progress bar.
		fourceAutoplay: false, // If false autoplay will be stopped after first user action

		// fullScreen plugin
		fullScreen: true, // Enable/Disable fullscreen mode.

		// zoom plugin
		zoom: true, // Enable/Disable zoom option.
		scale: 0.5, // Value of zoom should be incremented/decremented.
		enableZoomAfter: 50, // Some css styles will be added to the images if zoom is enabled. So it might conflict if you add some custom styles to the images such as the initial transition while opening the gallery. So you can delay adding zoom related styles to the images by changing the value of enableZoomAfter.

		// video options
		videoMaxWidth: '1400px', // Set limit for video maximal width.

		// Youtube video options
		loadYoutubeThumbnail: true, // You can automatically load thumbnails for youtube videos from youtube by setting loadYoutubeThumbnail true.
		youtubeThumbSize: 'default', // You can specify the thumbnail size by setting respective number: 0, 1, 2, 3, 'hqdefault', 'mqdefault', 'default', 'sddefault', 'maxresdefault'.
		youtubePlayerParams: { // Change youtube player parameters: https://developers.google.com/youtube/player_parameters
			modestbranding: 0,
			showinfo: 1,
			controls: 1
		},

		// Vimeo video options
		loadVimeoThumbnail: true, // You can automatically load thumbnails for vimeo videos from vimeo by setting loadYoutubeThumbnail true.
		vimeoThumbSize: 'thumbnail_medium', // Thumbnail size for vimeo videos: 'thumbnail_large' or 'thumbnail_medium' or 'thumbnail_small'.
		vimeoPlayerParams: { // Change vimeo player parameters: https://developer.vimeo.com/player/embedding#universal-parameters 
			byline : 1,
			portrait : 1,
			title: 1,
			color : 'CCCCCC',
			autopause: 1
		},

		// hash plugin (unique url for each slides)
		hash: true, // Enable/Disable hash plugin.
		hgalleryId: 1, // Unique id for each gallery. It is mandatory when you use hash plugin for multiple galleries on the same page.

		// share plugin
		share: false, // Enable/Disable share plugin.
			facebook: true, // Enable Facebook share.
			facebookDropdownText: 'Facebook', // Facebok dropdown text.
			twitter: true, // Enable Twitter share.
			twitterDropdownText: 'Twitter', // Twitter dropdown text.
			googlePlus: true, // Enable Google Plus share.
			googlePlusDropdownText: 'Google+', // Google Plus dropdown text.
			pinterest: true, // Enable Pinterest share.
			pinterestDropdownText: 'Pinterest' // Pinterest dropdown text.

	});



	// =====================================================
	// OWL Carousel
	// More info: https://owlcarousel2.github.io/OwlCarousel2/
	// Note: "animate.css" library is required: https://daneden.github.io/animate.css/
	// =====================================================

	$('.owl-carousel').each(function() {
		var $carousel = $(this);
		$carousel.owlCarousel({

			items: $carousel.data("items"),
			loop: $carousel.data("loop"),
			margin: $carousel.data("margin"),
			center: $carousel.data("center"),
			startPosition: $carousel.data("start-position"),
			animateIn: $carousel.data("animate-in"),
			animateOut: $carousel.data("animate-out"),
			autoHeight: $carousel.data("autoheight"),
			autoplay: $carousel.data("autoplay"),
			autoplayTimeout: $carousel.data("autoplay-timeout"),
			autoplayHoverPause: $carousel.data("autoplay-hover-pause"),
			autoplaySpeed: $carousel.data("autoplay-speed"),
			nav: $carousel.data("nav"),
			navText: ['', ''],
			navSpeed: $carousel.data("nav-speed"),
			dots: $carousel.data("dots"),
			dotsSpeed: $carousel.data("dots-speed"),
			mouseDrag: $carousel.data("mouse-drag"),
			touchDrag: $carousel.data("touch-drag"),
			dragEndSpeed: $carousel.data("drag-end-speed"),
			lazyLoad: $carousel.data("lazy-load"),
			lazyLoadEager: $carousel.data("lazy-load-eager"),
			video: true,
			onLoadLazy: owlLazyLoading,
			onLoadedLazy: owlLazyLoaded,
			responsive: {
				0: {
					items: $carousel.data("mobile-portrait"),
				},
				480: {
					items: $carousel.data("mobile-landscape"),
				},
				768: {
					items: $carousel.data("tablet-portrait"),
				},
				992: {
					items: $carousel.data("tablet-landscape"),
				},
				1200: {
					items: $carousel.data("items"),
				}
			}

		});

	});


	// Mousewheel plugin
	var owlMouse = $('.owl-mousewheel');
	owlMouse.on('mousewheel', '.owl-stage', function (e) {
		if (e.deltaY > 0) {
			owlMouse.trigger('prev.owl', [800]);
		} else {
			owlMouse.trigger('next.owl', [800]);
		}
		e.preventDefault();
	});
	

	// Keyboard (prev/next arrow) events for navigating
	// https://github.com/OwlCarousel2/OwlCarousel2/issues/492#issuecomment-55629470
	var owlKeyboard = $('.owl-carousel');
	$(document).keyup(function(i){
		if(i.keyCode==37) {
			owlKeyboard.trigger('prev.owl', [800]);
		} else if (i.keyCode==39) {
			owlKeyboard.trigger('next.owl', [800]);
		}
	});


	// Add owl lazy loader to ".owl-lazy" element (for background images only!).
	// ===========================================
	$('.owl-lazy').each(function() {
		var owlLazy = $(this);
		if ($(owlLazy).hasClass('bg-image')) {
			// add wrap element to ".owl-lazy".
			$(owlLazy).wrap("<div class='owl-lazy-wrap' />");
			// add lazy loader to parent element.
			$(owlLazy).parent().prepend('<div class="owl-lazy-loader"></div>');
		}
	});

	// Owl Callbacks for lazy loader
	function owlLazyLoading(event) {
		$('.owl-lazy-loader').each(function() {
			$(this).addClass('owl-lazy-loading');
		});
	}
	function owlLazyLoaded(event) {
		$('.owl-lazy-loader').each(function() {
			$(this).removeClass('owl-lazy-loading');
		});
	}



	// ==============================
	// Content toggle
	// ==============================

	$('.tt-con-toggle-trigger').on("click",function() {
		$('.tt-content-toggle').toggleClass('tt-con-toggle-open');
		$('.tt-con-toggle-hidden').slideToggle( 400 );
	});



	// =======================================================================================
	// Counter-Up
	// More info: https://github.com/ciromattia/jquery.counterup
	// Note: Requires jQuery waypoints.js plugin: https://github.com/imakewebthings/waypoints
	// =======================================================================================

	$('.tt-counter-up').counterUp({
		delay: 10, // The delay in milliseconds per number count up.
		time: 1000, // The total duration of the count up animation.
		offset: 100, // The viewport percentile from which the counter starts (by default it's 100, meaning it's triggered at the very moment the element enters the viewport).
		beginAt: 0 // The number from which to count up.
	});



	// =======================================================
	// YTPlayer (Background Youtube video)
	// Source: https://github.com/pupunzi/jquery.mb.YTPlayer
	// =======================================================

	$(".youtube-bg").YTPlayer();



	// =============================================================
	// Sticky sidebar
	// Source: https://github.com/WeCodePixels/theia-sticky-sidebar
	// =============================================================

	if ($('.tt-sidebar').hasClass('tt-sticky-sidebar')) {

		$('.sidebar-column').theiaStickySidebar({
			additionalMarginTop: 100,
			additionalMarginBottom: 0,
			minWidth: 991 // disable breakpoint.
		});

	}



	// ============
	// tt-sidebar
	// ============

	// If tt-sidebar exist add class "tt-sidebar-on" to <pody>
	if ($('.tt-sidebar').length) {
		$('body').addClass('tt-sidebar-on');
	}

	// If tt-sidebar has class "sidebar-left" add class "sidebar-left-on" to <pody>
	if ($('.tt-sidebar').hasClass('sidebar-left')) {
		$('body').addClass('sidebar-left-on');
	}

	// If tt-sidebar has class "sidebar-right" add class "sidebar-right-on" to <pody>
	if ($('.tt-sidebar').hasClass('sidebar-right')) {
		$('body').addClass('sidebar-right-on');
	}



	// =======================================================================================
	// Defer videos (Youtube, Vimeo)
	// Note: When you have embed videos in your webpages it causes your page to load slower.
	// Deffering will allow your page to load quickly.
	// Source: https://www.feedthebot.com/pagespeed/defer-videos.html
	// =======================================================================================

	function init() {
	var vidDefer = document.getElementsByTagName('iframe');
	for (var i=0; i<vidDefer.length; i++) {
	if(vidDefer[i].getAttribute('data-src')) {
	vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
	} } }
	window.onload = init;



	// ===================================
	// Remove input placeholder on focus
	// ===================================

	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
			.attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});



	// ===============================================
	// uniMail - Universal PHP Mail Feedback Script
	// Source: https://github.com/agragregra/uniMail
	// ===============================================

	// E-mail Ajax Send
	$("#contact-form").submit(function() { // your contact form ID.
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", // mail.php path (do not remove this file!!!).
			data: th.serialize()
		}).done(function() {
			alert("Thank you. Your message has been sent!");
			setTimeout(function() {
			// Done Functions
			th.trigger("reset");
			}, 1000);
		});
		return false;
	});



	// ======================
	// Footer
	// ======================

	// If fixed footer enabled
	$(window).resize(function() {
		if ($('#footer').hasClass('footer-fixed')) {
			
			// Make "#page-wrap" margin-bottom equal to ".footer-fixed" height (no effect on small devices).
			if ($(window).width() > 991) {
				$('#page-wrap').css('margin-bottom', $('.footer-fixed').css('height'));
			} else {
				$('#page-wrap').css('margin-bottom', '0');
			}

		}

	}).resize();


	// if #footer contains class "footer-simple" add class "footer-simple-on" to <body>.
	if ($('#footer').hasClass('footer-simple')) {
		$('body').addClass('footer-simple-on');
	}

	// if #footer contains class "footer-minimal" add class "footer-minimal-on" to <body>.
	if ($('#footer').hasClass('footer-minimal')) {
		$('body').addClass('footer-minimal-on');
	}

	// if #footer contains class "footer-fixed" add class "footer-fixed-on" to <body>.
	if ($('#footer').hasClass('footer-fixed')) {
		$('body').addClass('footer-fixed-on');
	}



	// ======================
	// Scroll to top button
	// ======================

	// Check to see if the window is top if not then display button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$('.scrolltotop').addClass('scr-active');
		} else {
			$('.scrolltotop').removeClass('scr-active');
		}
	});


	// ===============
	// Miscellaneous
	// ===============

	// Bootstrap forms validation
	// =============================
	window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
			form.addEventListener('submit', function(event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);


	// Bootstrap modal fix
	// =============================
	$('.modal').appendTo("body")


	// Hover fix for iOS
	// =============================
	$('*').on('touchstart',function() {
		$(this).trigger('hover');
	}).on('touchend',function() {
		$(this).trigger('hover');
	});



})(jQuery);

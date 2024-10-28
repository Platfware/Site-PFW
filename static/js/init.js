/*
 * Copyright (c) 2022 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	platfware_modalbox_products();
	platfware_popupscroll();
	platfware_ripple();
	platfware_color_switcher();
	platfware_switcher_opener();
	platfware_cursor_switcher();
	platfware_videoplayer();
	platfware_hero_title();
	platfware_wavefy();
	platfware_nav_bg();
	platfware_anchor();
	platfware_down();
	platfware_hamburger();
	platfware_cursor();
	platfware_imgtosvg();
	platfware_popup();
	platfware_data_images();
	platfware_contact_form();
	platfware_parallax_effect();
	platfware_totop();
	
	jQuery(window).load('body', function(){
		platfware_my_load();
	});
	jQuery(window).on('resize', function(){
		platfware_modalbox_products();
	});
	jQuery(window).on('scroll', function(){
		platfware_progress_line();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------


// ------------------------------------------------------------------------
// ---------------   CONTACTS VALIDATION FUNCTION    ----------------------
// ------------------------------------------------------------------------




// -------------------------------------------------
// -------------  MODALBOX products  -------------------
// -------------------------------------------------

function platfware_modalbox_products(){
	
	"use strict";
	
	var modalBox	= jQuery('.platfware_modalbox_products');
	var list 		= jQuery('.platfware_products .products_list ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.details .title a,.platfware_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		var title		= element.find('.title');
		var titleHref	= element.find('.title a').html();
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = modalBox.find('.title');
			title.html(titleHref);
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});
	
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function platfware_popupscroll(){
	
	"use strict";
	
	var WW				= jQuery(window).width();
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.scrollable');
	
	var popupBox		= jQuery('.platfware_modalbox_products .description_wrap');
	
	if(WW >= 1200){
		popupBox.css({height:H-140});
	}else{
		popupBox.css({height:H});
	}
	
	scrollable.each(function(){
		var element		= jQuery(this);
		var wH			= jQuery(window).height();
		
		element.css({height: wH-140});
		
		if(WW >= 1200){
			element.css({height: wH-140});
		}else{
			element.css({height: wH});
		}
		
		element.niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #fff"
		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function platfware_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
		resolution: 500,
		dropRadius: 20,
		perturbance: 0.04
	});
}

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function platfware_color_switcher(){
	
	"use strict";

	var list	= jQuery('.platfware_settings .colors li a');

	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.platfware_all_wrap').attr('data-color',''+elval+'');
		return false;
	});	
}

function platfware_switcher_opener(){
	
	"use strict";
	
	var settings	= jQuery('.platfware_settings');
	var button		= settings.find('.link');
	var direction	= settings.find('.direction li a');
	var light		= settings.find('.direction li a.light');
	var dark		= settings.find('.direction li a.dark');

	button.on('click',function(){
		var element = jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			element.closest('.platfware_settings').removeClass('opened');
		}else{
			element.addClass('opened');
			element.closest('.platfware_settings').addClass('opened');
		}
		return false;
	});

	direction.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('active')){
			direction.removeClass('active');
			element.addClass('active');
		}
	});

	dark.on('click',function(){
		var el = jQuery(this);
		jQuery('body').addClass('dark');
		jQuery('.platfware_partners').addClass('opened');
		el.closest('.platfware_settings').addClass('changed');
		return false;
	});

	light.on('click',function(){
		var ele = jQuery(this);
		jQuery('body').removeClass('dark');
		jQuery('.platfware_partners').removeClass('opened');
		ele.closest('.platfware_settings').removeClass('changed');
		return false;
	});
}

function platfware_cursor_switcher(){

	"use strict";
	
	var wrapper		= jQuery('.platfware_all_wrap');
	var button		= jQuery('.platfware_settings .cursor li a');
	var show		= jQuery('.platfware_settings .cursor li a.show');
	var hide		= jQuery('.platfware_settings .cursor li a.hide');

	button.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('showme')){
			button.removeClass('showme');
			element.addClass('showme');
		}
		return false;
	});
	show.on('click',function(){
		wrapper.attr('data-magic-cursor','');
	});
	hide.on('click',function(){
		wrapper.attr('data-magic-cursor','hide');
	});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function platfware_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// ---------------   MY WAYPOINT    --------------------
// -----------------------------------------------------

function platfware_my_waypoint(){
	
	"use strict";
	
	var myWaypoint		= jQuery('.my_waypoint');
	
	myWaypoint.each(function(){
		
		var element	= jQuery(this);
		
		element.waypoint({
			handler:function(){
				element.addClass('load');
			},
			offset:"80%"
		});
	});
}

// -----------------------------------------------------
// -----------------   HERO TITLE    -------------------
// -----------------------------------------------------

function platfware_hero_title(){
	
	"use strict";
	
	var heroText 		= jQuery('.fn_animation');
	
	heroText.each(function(){
		var element 	= $(this);
		var	start	 	= '<span class="word">';
		var	char	 	= '<span class="character">';
		var end			= '</span>';
		var space 		= '&nbsp;';
		var allHTML 	= '';
		$.each(element.text().split(' '), function(i,e){
			if(i !== 0){
				allHTML += char + space + end;
			}
			allHTML += start;
			$.each(e.split(''), function (ii, ee) {
				allHTML += char + ee + end;
			});
			allHTML += end;
		});
		element.html(allHTML).addClass('ready');
	 });
}

function platfware_hero_title_fade(){
	"use strict";
	
	var mySpan	= jQuery('.fn_animation .character');
	var a 		= 0;
	var speed 	= 30;
	var wait	= 500;
	mySpan.each(function(i){
		var element = jQuery(this);
		setTimeout(function(){element.addClass('opened');},i*speed);
		a		= i*speed;
	});
	setTimeout(function(){
		jQuery('.platfware_topbar').addClass('opened');
		jQuery('.platfware_down').addClass('opened');
	},a+wait);
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function platfware_my_load(){
	
	"use strict";
	
	platfware_my_waypoint();
	setTimeout(function(){platfware_preloader();},1000);
	setTimeout(function(){platfware_hero_title_fade();},3000);
}

// -----------------------------------------------------
// ------------------   WAVIFY   -----------------------
// -----------------------------------------------------

function platfware_wavefy(){
	"use strict";
		
	jQuery('#wave_img').wavify({
		height: 10,
		bones: 3,
		amplitude: 45,
		color: $('#wave_img').data('color'),
		speed: 0.25
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function platfware_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function platfware_nav_bg(){
	
	"use strict";

	jQuery(window).on('scroll',function(){
		var progress	 	= jQuery('.progressbar');
		var topbar	 		= jQuery('.platfware_topbar');
		var WinOffset		= jQuery(window).scrollTop();

		if(WinOffset >= 100){
			topbar.addClass('animate');
			progress.addClass('animate');
		}else{
			topbar.removeClass('animate');
			progress.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -----------  ANCHOR NAVIGATION ------------------
// -------------------------------------------------

function platfware_anchor(){
	
	"use strict";
	
	jQuery('.anchor_nav').onePageNav();
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function platfware_down(){
	
	"use strict";
	
	jQuery('.platfware_talk .button a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-70
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function platfware_hamburger(){
		
	"use strict";
		
	var hamburger 		= jQuery('.hamburger');
	var mobileMenu		= jQuery('.platfware_mobile_menu .dropdown');
	
	hamburger.on('click',function(){
		var element 	= jQuery(this);
		
		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	jQuery('.platfware_mobile_menu .dropdown .dropdown_inner ul li a').on('click',function(){
		jQuery('.hamburger').removeClass('is-active');
		jQuery('.platfware_mobile_menu .dropdown').slideUp();
		return false;
	});
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function platfware_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function platfware_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function platfware_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
    animateClass: 'animated',
    offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function platfware_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function platfware_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function platfware_parallax_effect(){

	"use strict";

	if ($('.parallax').length > 0) { 
	  var scene = $('.parallax').get(0);
	  var parallax = new Parallax(scene, { 
		relativeInput: true,
		onReady: function() { console.log('ready!');
	  } });
	}
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.kioto_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});

function platfware_progress_line(){
	
	"use strict";
	
	var line			= jQuery('.progressbar .line');
	var documentHeight 	= jQuery(document).height();
	var windowHeight 	= jQuery(window).height();
	var winScroll 		= jQuery(window).scrollTop();
	var value 			= (winScroll/(documentHeight-windowHeight))*100;
	var position 		= value;

	line.css('height',position+"%");
}

/****************************/ 
/********** TOTOP ***********/ 
/****************************/ 

function platfware_totop(){
  
  "use strict";
  
	jQuery(".progressbar a").on('click', function(e) {
		e.preventDefault();    
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}










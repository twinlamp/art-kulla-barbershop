/* =================================================================
* Effect inspired by: https://codepen.io/supah/pen/RrzREx
* Class: "tt-move-bg".
* Note: for page header image and hero slider images only!
================================================================= */

$('.page-header-image').each(function(){if($(this).hasClass('tt-move-bg')){$(this).wrap("<div class='tt-move-bg-wrap' />");$('.tt-move-bg-wrap').css({'position':'absolute','top':'0','left':'0','right':'0','bottom':'0'})}});$('.tt-hero-slider .cc-image').each(function(){if($(this).hasClass('tt-move-bg')){$(this).wrap("<div class='tt-move-bg-wrap' />")}});var moveMouseArea=$('#page-header, .tt-hero-slider');var moveBg=$('.tt-move-bg-wrap');var lFollowX=0,lFollowY=0,x=0,y=0,friction=1/40;function moveBackground(){x+=(lFollowX-x)*friction;y+=(lFollowY-y)*friction;translate='translate('+x+'px, '+y+'px) scale(1.1)';moveBg.css({'-webit-transform':translate,'-moz-transform':translate,'transform':translate});window.requestAnimationFrame(moveBackground)}
moveMouseArea.on('mousemove click',function(e){var lMouseX=Math.max(-100,Math.min(100,$(window).width()/2-e.clientX));var lMouseY=Math.max(-100,Math.min(100,$(window).height()/2-e.clientY));lFollowX=(7*lMouseX)/100;lFollowY=(4*lMouseY)/100});moveBackground()

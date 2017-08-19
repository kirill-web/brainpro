$(document).ready(function(){
	
	$('.menu-toggle, .menu-toggle--inside').on('click', function(){
		$('body').addClass('no-scroll');
		$('.main-menu').show(300);
		$('.main-menu').css('display', 'flex');
	});
	$('.main-menu__close').on('click', function(){
		$('.main-menu').hide(300);
		$('body').removeClass('no-scroll');
	});
	
});
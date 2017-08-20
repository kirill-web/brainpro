$(document).ready(function(){
	
	// Мобильное меню
	$('.menu-toggle, .menu-toggle--inside').on('click', function(){
		$('body').addClass('no-scroll');
		$('.main-menu').show(300);
		$('.main-menu').css('display', 'flex');
	});
	$('.main-menu__close').on('click', function(){
		$('.main-menu').hide(300);
		$('body').removeClass('no-scroll');
	});
	
	// Услуги на мобильных на главной
	$('.service-sec__mobile-item').on('click', function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent('.container').removeClass('active');
			$(this).next('.service-sec__mobile-hide').slideUp(200);
		} else {
			$(this).addClass('active');
			$(this).parent('.container').addClass('active');
			$(this).next('.service-sec__mobile-hide').slideDown(200);
		}
	});
	
	// Табы с ценами на странице принт
	$('.prices-sec__tab').on('click', function(){
		$('.prices-sec__tab').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');
		
		$('.prices-sec__items').removeClass('active');
		$('.prices-sec__items#' + dataId).addClass('active');
	});
});
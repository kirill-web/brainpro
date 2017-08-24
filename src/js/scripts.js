$(document).ready(function () {

	// Мобильное меню
	$('.menu-toggle, .menu-toggle--inside').on('click', function () {
		$('body').addClass('no-scroll');
		$('.main-menu').show(300);
		$('.main-menu').css('display', 'flex');
	});
	$('.main-menu__close').on('click', function () {
		$('.main-menu').hide(300);
		$('body').removeClass('no-scroll');
	});

	// Услуги на мобильных на главной
	$('.service-sec__mobile-item').on('click', function () {
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
	$('.prices-sec__tab').on('click', function () {
		$('.prices-sec__tab').removeClass('active');
		$(this).addClass('active');
		var dataId = $(this).attr('data-id');

		$('.prices-sec__items').removeClass('active');
		$('.prices-sec__items#' + dataId).addClass('active');
	});

	// Форма заказа табы
	$('.order-form__tab-back--disable, .order-form__tab--disable').on('click', function (e) {
		e.preventDefault();
	});

	// Отдать товар
	$('.order-form__tab:not(.order-form__tab--disable)').on('click', function (b) {
		b.preventDefault();
		$('.order-form__tab').removeClass('active');
		$(this).addClass('active');
		if ($('.order-form__tab.for-shops').hasClass('active')) {
			$('.order-form__give .order-form__common-tab, .mobile-form .order-form__common-tab').hide();
			$('.order-form__give .order-form__shops-wrap, .mobile-form .order-form__shops-wrap').show();
		}
		if ($('.order-form__tab.for-post').hasClass('active')) {
			$('.order-form__give .order-form__common-tab, .mobile-form .order-form__common-tab').hide();
			$('.order-form__give .order-form__post, .mobile-form .order-form__post').show();
		}
		if ($('.order-form__tab.for-courier').hasClass('active')) {
			$('.order-form__give .order-form__common-tab, .mobile-form .order-form__common-tab').hide();
			$('.order-form__give .order-form__courier, .mobile-form .order-form__courier').show();
		}
	});

	// Получить товар
	$('.order-form__tab-back:not(.order-form__tab-back--disable)').on('click', function (a) {
		a.preventDefault();
		$('.order-form__tab-back').removeClass('active');
		$(this).addClass('active');
		if ($('.order-form__tab-back.for-shops').hasClass('active')) {
			$('.order-form__take .order-form__common-tab').hide();
			$('.order-form__take .order-form__shops-wrap').show();
		}
		if ($('.order-form__tab-back.for-post').hasClass('active')) {
			$('.order-form__take .order-form__common-tab').hide();
			$('.order-form__take .order-form__post').show();
		}
		if ($('.order-form__tab-back.for-courier').hasClass('active')) {
			$('.order-form__take .order-form__common-tab').hide();
			$('.order-form__take .order-form__courier').show();
		}
	});

	// Доплачу за доставку до адреса
	$('.order-form__post .order-form__check').change(function () {
		if ($(this).is(':checked')) {
			$(this).siblings('.order-form__input').show();
		} else {
			$(this).siblings('.order-form__input').hide();
		}
	});

	// Маска для телефона
	$(".order-form__input--tel").mask("(999) 999-99-99", {
		placeholder: "(___) ___-__-__"
	});

	// Подробная инфа о магазине
	$('.order-form__shop').click(function (d) {
		d.preventDefault();
		$('.order-form__shop').not(this).removeClass('active').next('.order-form__shop-info').slideUp(200);
		if ($(this).hasClass('active')) {
			$(this).removeClass('active').next('.order-form__shop-info').slideUp(200);
		} else {
			$(this).addClass('active').next('.order-form__shop-info').slideDown(200);
		}
	});

	// Плавные плейсхолдеры
	$('.order-form__input input, .order-form__input textarea').focus(function () {
		$(this).next('.order-form__placeholder').addClass('active');
		$(this).css({
			"paddingTop": "23px",
			"paddingBottom": "13px"
		});
	});
	$('.order-form__input input').focusout(function () {
		if ($(this).val() === "") {
			$(this).next('.order-form__placeholder').removeClass('active');
			$(this).css({
				"paddingTop": "18px",
				"paddingBottom": "18px"
			});
		}
	});
	$('.big-quick-popup__input input').focus(function () {
		$(this).next('.big-quick-popup__placeholder').addClass('active');
		$(this).css({
			"paddingTop": "26px",
			"paddingBottom": "6px"
		});
	});
	$('.big-quick-popup__input input').focusout(function () {
		if ($(this).val() === "") {
			$(this).next('.big-quick-popup__placeholder').removeClass('active');
			$(this).css({
				"paddingTop": "16px",
				"paddingBottom": "16px"
			});
		}
	});

	// Слайдер 
	$('.about-us__img-item').hover(function () {
		$('.about-us__img-item').removeClass('active');
		$(this).addClass('active');
	});

	// Быстрая заявка десктоп
	$('.print-promo__btn').on('click', function () {
		$('body').addClass('no-scroll');
		$('.big-quick-popup').show(300);
		$('.big-quick-popup').css('display', 'flex');
	});
	$('.big-quick-popup__close').on('click', function () {
		$('.big-quick-popup').hide(300);
		setTimeout(function(){
			$('body').removeClass('no-scroll');
			$('.big-quick-popup__container').show();
		$('.big-quick-popup__done').hide();
		}, 300);
	});
	$('.big-quick-popup__submit').on('click', function(){
		$('.big-quick-popup__container').hide();
		$('.big-quick-popup__done').show();
	});

	// Быстрая заявка 
	$('.quick-bid__btn').on('click', function () {
		$('body').addClass('no-scroll');
		$('.quick-popup').fadeIn(200);
	});
	$('.quick-popup__close').on('click', function () {
		$('.quick-popup').fadeOut(200);
		$('body').removeClass('no-scroll');
	});
	$(document).mouseup(function (c) {
		var elem = $('.quick-popup');
		if (elem.is(':visible')) {
			if (c.target != elem[0] && !elem.has(c.target).length) {
				$('body').removeClass('no-scroll');
				elem.fadeOut(200);
			}
		}
	});

	// Заявка на мобильных
	$('.prices-sec__mobile-btn').on('click', function () {
		$('body').addClass('no-scroll');
		$('.mobile-form').fadeIn(200);
		$('.mobile-form__steps').removeClass('active');
		$('.mobile-form__steps#step-one').addClass('active');
	});
	$('.mobile-form__close').on('click', function () {
		$('.mobile-form').fadeOut(200);
		$('body').removeClass('no-scroll');
	});
	$(document).mouseup(function (a) {
		var form = $('.mobile-form');
		if (form.is(':visible')) {
			if (a.target != form[0] && !form.has(a.target).length && form.is(':visible')) {
				$('body').removeClass('no-scroll');
				form.fadeOut(200);
			}
		}
	});

	// Форма по шагам на мобильных
	$('.mobile-form__next, .mobile-form__prev').on('click', function () {
		var dataId = $(this).attr('data-id');

		$('.mobile-form__steps').removeClass('active');
		$('.mobile-form__steps#' + dataId).addClass('active');
	});

});
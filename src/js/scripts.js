$(document).ready(function () {

	// Prevent # behavior
	$('[href="#"]').click(function (e) {
		e.preventDefault();
	});

	$('.order-form__input textarea').focusout(function () {
		var vav = $(this).val();
	})

	// Мобильное меню
	$('.menu-toggle, .menu-toggle--inside').on('click', function () {
		$('body').toggleClass('no-scroll');
		$('.main-menu').toggleClass('active');
		if ($(window).width() < 768) {
			$('.main-menu').css('display', 'block');
		}
		$(this).toggleClass('active');
		$('.page-header').toggleClass('active-menu');
	});

	$(document).ready(function () {
		if ($(window).width() < 1899 && $(window).width() > 1440) {
			var asideWidth = $('.page-header .aside').width();
			$('.about-us .aside').width(asideWidth);
			$('.about-us__content').css('width', 'calc(100% - ' + asideWidth + 'px)');
		}
		$(window).resize(function(){
			if ($(window).width() < 1899 && $(window).width() > 1440) {
			var asideWidth = $('.page-header .aside').width();
			$('.about-us .aside').width(asideWidth);
			$('.about-us__content').css('width', 'calc(100% - ' + asideWidth + 'px)');
		}
		});
	})

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

	// Смена контактов при смене города
	$('.contacts__select').change(function () {
		var selectVal = $(this).val();
		if (selectVal == 'Ивано-франковск') {
			console.log('im here')
			$('.contacts__city').removeClass('active');
			$('.contacts__city#city-ivanovo').addClass('active');
		}
		if (selectVal == 'Киев') {
			$('.contacts__city').removeClass('active');
			$('.contacts__city#city-kiev').addClass('active');
		}
		if (selectVal == 'Одесса') {
			$('.contacts__city').removeClass('active');
			$('.contacts__city#city-odessa').addClass('active');
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
	$('.order-form__tab:not(.order-form__tab--disable)').on('click', function (e) {
		e.preventDefault();
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
	$('.order-form__tab-back:not(.order-form__tab-back--disable)').on('click', function (e) {
		e.preventDefault();
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
	$(".order-form__input--tel, .big-quick-popup__tel").mask("(999) 999-99-99", {
		placeholder: "(___) ___-__-__"
	}, {
		clearIfNotMatch: true
	});

	// reset mask on load
	$(window).on('load', function () {
		$(".order-form__input--tel, .big-quick-popup__tel").val("")
	});

	// Подробная инфа о магазине
	$('.order-form__shop').click(function (e) {
		e.preventDefault();
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
			"paddingTop": "22px",
			"paddingBottom": "12px"
		});
	});
	$('.order-form__input input, .order-form__input textarea').focusout(function () {
		if ($(this).val() === "" || $(this).val() == "(___) ___-__-__") {
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
	$('.print-promo__btn, .prices-sec__order-link, a.service-sec__more-text, [js-quick-order-desktop], [js-quick-order]').on('click', function () {
		$('body').addClass('no-scroll');
		$('.big-quick-popup').addClass('active');
		//		$('.big-quick-popup').css('display', 'flex');
	});
	$('.big-quick-popup__close').on('click', function () {
		$('.big-quick-popup').removeClass('active');
		setTimeout(function () {
			$('body').removeClass('no-scroll');
			$('.big-quick-popup__container').show();
			$('.big-quick-popup__done').hide();
		}, 300);
	});
	$('.big-quick-popup__submit').on('click', function () {
		if ($(this).closest('form').is('.big-quick-popup--v2')) {

		} else {
			$('.big-quick-popup__container').hide();
			$('.big-quick-popup__done').show();
		}

	});

	// Заявка на услгугу
	$('.quick-bid__btn').on('click', function () {
		$('body').addClass('no-scroll');
		$('.overlay').show();
		$('.quick-popup').fadeIn(200);
	});
	$('.quick-popup__close').on('click', function () {
		$('.quick-popup').fadeOut(200);
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});
	$(document).mouseup(function (e) {
		var elem = $('.quick-popup');
		if (elem.is(':visible')) {
			if (e.target != elem[0] && !elem.has(e.target).length) {
				$('body').removeClass('no-scroll');
				$('.overlay').hide();
				elem.fadeOut(200);
			}
		}
	});

	// Заявка на мобильных
	$('.prices-sec__mobile-btn, .prices-sec__mobile-title, .service-sec__mobile-link').on('click', function () {
		$('body').addClass('no-scroll');
		$('.overlay').show();
		$('.quick-popup').fadeIn(200);
		//		$('.mobile-form__steps').removeClass('active');
		//		$('.mobile-form__steps#step-one').addClass('active');
	});
	$('.quick-popup__close').on('click', function () {
		$('.quick-popup').fadeOut(200);
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});
	$(document).mouseup(function (a) {
		var form = $('.quick-popup');
		if (form.is(':visible')) {
			if (a.target != form[0] && !form.has(a.target).length && form.is(':visible')) {
				$('body').removeClass('no-scroll');
				$('.overlay').hide();
				form.fadeOut(200);
			}
		}
	});
	$('.mobile-form__close').on('click', function () {
		$('.mobile-form').fadeOut(200);
		$('.overlay').hide();
		$('body').removeClass('no-scroll');
	});

	$('.quick-popup__submit').on('click', function (e) {
		e.preventDefault();
		$('.quick-popup').hide();
		$('.mobile-form').show();
		$('.mobile-form .mobile-form__steps').removeClass('active');
		$('.mobile-form #step-five').addClass('active');
	});

	// смит главной формы
	$('.order-form').on('submit', function (e) {
		e.preventDefault();
		$('body').addClass('no-scroll');
		$('.big-quick-popup').show(300);
		$('.big-quick-popup').css('display', 'flex');
		$('.big-quick-popup__container').hide();
		$('.big-quick-popup__done').show();
	});

	// Check i agree
	$('.agree-wrap .order-form__check-label, .mobile-form__agree .order-form__check-label').on('click', function () {
		if ($(this).parent().find('input').is(':checked')) {
			$(this).parent().addClass('checked');
		} else {
			$(this).parent().removeClass('checked');
		}
	});

	// Форма по шагам на мобильных
	$('.mobile-form__next, .mobile-form__prev').on('click', function () {
		var dataId = $(this).attr('data-id');

		$('.mobile-form__steps').removeClass('active');
		$('.mobile-form__steps#' + dataId).addClass('active');
	});


	// Кастомные селекты
	$('.order-form__select, .popup__select, .contacts__select').selectric();

	//Обернуть элементы селекта

	$('.contacts .selectric-items li').wrapInner("<span></span>");


	// Смена инфы при смене города в большой форме
	$('.order-form__select').change(function () {
		if ($(this).val() == 'Киев') {
			$('.order-form__give, .order-form__take').hide();
			$('#give-kiev, #take-kiev').show();
		}
		if ($(this).val() == 'Одесса') {
			$('.order-form__give, .order-form__take').hide();
			$('#give-odessa, #take-odessa').show();
		}
	});

	// WOW
	// wow = new WOW({
	// 	boxClass: 'wow',
	// 	animateClass: 'animated',
	// 	offset: 0,
	// 	mobile: false,
	// 	live: true
	// })
	// wow.init();
	var monitorActive = false;
  window.runScrollMonitor = function(){
    setTimeout(function(){
      if ( !monitorActive ){
        monitorActive = true;
        $('.wow').each(function(i, el){

					// parse params
          var delay;
					if ( $(window).width() < 768 ){
						delay = 0
					} else {
						delay = $(el).data('wow-delay');
					}

					var animationName = $(el).data('animation-name');

					var offset

					if ( $(el).data('wow-delay') ){
						offset = $(el).data('wow-delay')
					} else {
						offset = 0;
					}

					// create instance and apply events
					var elWatcher = scrollMonitor.create( $(el), offset );

					$(el).css({
						'visibility': 'hidden'
					})

          elWatcher.enterViewport(function() {
            $(el).css({
              'animation-name': animationName,
              'animation-delay': delay,
							'visibility': 'visible'
            });
          });
          elWatcher.exitViewport(function() {
            $(el).css({
              'animation-name': 'none',
              'animation-delay': 0,
							'visibility': 'hidden'
            });
          });
        });
      }

    },300);
  }
  setTimeout(function(){
    runScrollMonitor();
  },1000)


	// переход к форме по заказать
	$('.prices-sec__order-link, .prices-sec__item').on('click', function () {
		var getId = $(this).data('order-id') - 1;

		if ($(this).is('[js-quick-order]') || $(this).is('[js-quick-order-desktop]')) {
			$('.popup__select').prop('selectedIndex', getId).selectric('refresh');
			console.log(getId);
		} else {
			$('body, html').animate({
				scrollTop: $('.order-sec').offset().top - 15
			}, 1000);
			$('.order-form__select').prop('selectedIndex', getId).selectric('refresh');
			return false;
		}
	})

	$('[js-quick-order]').on('click', function () {
		var text = $(this).parent().find('h3').text();
		$('[js-paste-order-option]').find('select').val(text);
	})

	// preload images
	$.fn.preload = function () {
		this.each(function () {
			$('<img/>')[0].src = this;
		});
	}
	$(['img/popup-close.png']).preload();


	// print v2
	$('.about-us__slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 400,
		cssEase: 'ease-in',
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 1,
		vertical: false,
		adaptiveHeight: false
	});

	/////////////////
	// JQUERY VALIDATE
	/////////////////
	var validateErrorPlacement = function (error, element) {
		return false;
		// error.addClass('ui-input__validation');
		// error.appendTo(element.parent("div"));
	}
	var validateHighlight = function (element) {
		$(element).parent('div').addClass("has-error");
	}
	var validateUnhighlight = function (element) {
		$(element).parent('div').removeClass("has-error");
	}
	var validateSubmitHandler = function (form) {
		$(form).addClass('loading');
		$('.big-quick-popup__container').hide();
		$('.big-quick-popup__done').show();
		// $.ajax({
		//   type: "POST",
		//   url: $(form).attr('action'),
		//   data: $(form).serialize(),
		//   success: function(response) {
		//     $(form).removeClass('loading');
		//     var data = $.parseJSON(response);
		//     if (data.status == 'success') {
		//       // do something I can't test
		// 			// $('.big-quick-popup__container').hide();
		//   		// $('.big-quick-popup__done').show();
		//     } else {
		// 			// $('.big-quick-popup__container').hide();
		//   		// $('.big-quick-popup__done').show();
		//       $(form).find('[data-error]').html(data.message).show();
		//     }
		//   }
		// });
	}

	var validatePhone = {
		required: true,
		normalizer: function (value) {
			var PHONE_MASK = '(XXX) XXX-XX-XX';
			if (!value || value === PHONE_MASK) {
				return value;
			} else {
				return value.replace(/[^\d]/g, '');
			}
		},
		minlength: 10,
		digits: true
	}

	$('.big-quick-popup--v2').validate({
		errorPlacement: validateErrorPlacement,
		highlight: validateHighlight,
		unhighlight: validateUnhighlight,
		submitHandler: validateSubmitHandler,
		ignore: "",
		rules: {
			name_big: "required",
			big_agree: "required",
			email: {
				required: true,
				email: true
			},
			tel_big: validatePhone
		},
		messages: {
			name_big: "Заполните это поле",
			big_agree: "Согласитесь с условиями",
			email: {
				required: "Заполните это поле",
				email: "Email содержит неправильный формат"
			},
			phone: {
				required: "Заполните это поле",
				minlength: "Введите корректный телефон"
			}
		}
	});

});


$(window).on('load', function () {
	// preloader
	setTimeout(function () {
		$('body').addClass('loaded');
	}, 100);
});

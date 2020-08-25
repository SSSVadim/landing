'use strict';

//Adaptive functions
$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	/*Вводим пременные для объектов, которые нужно перекидывать*/
	var mobileMenu = $('.adaptive-header-menu');
	var menu = $('.header-menu');
	var social = $('.footer__social-wrapper');
	var login = $('.header__login-btn');

	/*На определенной ширине, перекидывает элементы appendTo prependTo insertAfter insertBefore*/
	/*По порядку*/
	if (w < 768) {
		if (!menu.hasClass('done')) {
			menu.addClass('done').appendTo(mobileMenu);
		}

		if (!login.hasClass('done')) {
			login.addClass('done').appendTo(mobileMenu);
		}

		if (mobileMenu.children('.footer__social-wrapper').length <= 0) {
			social.clone().css('marginTop', '20px').addClass('done').appendTo(mobileMenu); //из футера клонируется соц блок
		}

		/*Если экран шире, то кидаем обратно appendTo prependTo insertAfter insertBefore*/
	} else {
		if (menu.hasClass('done')) {
			menu.removeClass('done').insertAfter($('.header__logo'));
		}

		if (login.hasClass('done')) {
			login.removeClass('done').insertAfter(menu);
		}

		$('.adaptive-header-menu .footer__social-wrapper').remove(); //удаляется адрес который из футера клонировался
	}
}

function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();
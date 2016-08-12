// Mobile menu
(function(){
	$('.js-mobile-menu').on('click',function(){
		var menu = $('.js-mobile-drop') || $(this).next();
		menu.toggle('fast');
	});
})();

// Athlete search
(function(){
	$('.js-athlete-search').on('click',function(){
		$(this).closest('.athlete-search').find('.athlete-search__holder').toggle('fast');
	});
	$('.athlete-search__close').on('click',function(){
		$(this).closest('.athlete-search__holder').toggle('fast');
	});
})();

$(function () {
  $('[data-toggle="tooltip2"]').tooltip({template: '<div class="tooltip tooltip_type_round" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'})
})

// Promo height

function calulatePromoheight(){
	var windowHeight = window.innerHeight - $('header').height();
	$('.promo').height(windowHeight);
}
calulatePromoheight();
$( window ).resize(function() {
	calulatePromoheight();
});
/*
(function(){
	//console.log();
	$('.athlete-headline .athlete-page__content').affix({
	  offset: {
	    top: $('.athlete-headline').position().top,
	    bottom: function () {
	      return (this.bottom = $('.footer').outerHeight(true))
	    }
	  }
	});
})();
*/
var $win = $(window);
$win.scroll(function () {
	if ($win.scrollTop() > 45) {
		$("nav").addClass("navbarcolor");
	} else {
		$("nav").removeClass("navbarcolor");
	}
});
$('a.link[href^="#"]').click(function(e) {
 	var target = $(this).attr('href');
 	var strip = target.slice(1);
 	var anchor = $("section[id='" + strip + "']");
 	e.preventDefault();
 	y = (anchor.offset() || {
 		"top" : NaN
 	}).top;
 	$('html, body').animate({
 		scrollTop : (y - 40)
 	}, 'slow');
});
function validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function verificarDatos(e) {
	if(e.keyCode === 13){
		e.preventDefault();
		ingresar();
    }
}
$('#home .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		}
	},
	navigation: false,
	nav: true,
	loop: true,
	dots: true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	autoplay: true,
	autoplayTimeout: 5000,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});
$('.js-espacio--principal .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		},
		400: {
			items: 2
		},
		768: {
			items: 3
		}
	},
	navigation: false,
	nav: true,
	loop: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 5000,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});
$('.js-carousel .owl-carousel').owlCarousel({
	lazyLoad: true,
	responsive: {
		0: {
			items: 1
		},
		768:{
			items: 2
		}
	},
	navigation: false,
	nav: true,
	loop: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
});
function openModal(id){
    var modal   = $('#ModalDetalle');
    var id      = $('#'+id);
    var img     = id.find('.js-modal').find('img');
    var title   = id.find('.js-modal').find('h2');
    var content = id.find('.js-modal').find('p');
    var imagen  = id.find('.mdl-card__title').html();
    console.log(imagen);
    modal.find('.mdl-card__title').html(imagen);
    modal.find('.mdl-card__supporting-text').find('h2').text(title[0].innerText);
    modal.find('.mdl-card__supporting-text').find('p').text(content[0].innerText);
    modal.modal('toggle');
}
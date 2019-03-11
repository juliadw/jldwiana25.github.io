

// paralax scroll

$(document).ready(function(){
    $('.page-scroll').click(function(e){
        
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - 50
        }, 1000,'easeInOutQuad');

        e.preventDefault();
    });
});

(function($) {
    'use strict';
	
	jQuery(document).ready(function(){

/* START team */
$(".team_slider_area").owlCarousel({
    autoPlay: true,
    slideSpeed:1000,
    items : 3,
    loop: true,
    nav:true,
    navText:['<i class="fa fa-hand-o-left"></i>','<i class="fa fa-hand-o-right"></i>'],
    margin: 30,
    dots: true,
    responsive:{
        320:{
            items:1
        },
        767:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/* END TESTIMONIAL JS */
});	
new WOW().init();
})(jQuery);


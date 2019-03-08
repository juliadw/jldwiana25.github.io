
// // carousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:false
//         },
//         1000:{
//             items:3,
//             nav:true,
//             loop:false
//         }
//     }
// })

(function($) {
    'use strict';
	
	jQuery(document).ready(function(){

/* START TESTIMONIAL JS */
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
$(document).on("click tap touchstart", "#hal1", function(){
	tampilintempat_sosmed();
});

$(document).on("click tap touchstart", "#hal2", function(){
	tampilintempat_sosmed();
});

$(document).on("click tap touchstart", "#hal3", function(){
	tampilintempat_sosmed();
});

$(document).on("click tap touchstart", "#hal4", function(){
	tampilintempat_sosmed();
});

$(document).on("click tap touchstart", "#hal5", function(){
	tampilintempat_sosmed();
});

$(document).on("click tap touchstart", "#hal6", function(){
	sembunyiintempat_sosmed();
});


function tampilintempat_sosmed() {
	var tempatsosmed = document.getElementById("tempatsosmed");
	tempatsosmed.style.display = "block";
	$("#tempatsosmed").show();
}

function sembunyiintempat_sosmed() {
	var tempatsosmeds = document.getElementById("tempatsosmed");
	tempatsosmeds.style.display = "none";
	$("#tempatsosmed").hide();
}


(function($) {
	'use strict';
	
	

	jQuery(document).on('ready', function(){
	
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
								
		$('.fitur_ngitung').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.efek-ngitung').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});

		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	

		 $("#testimonial-slider").owlCarousel({
			items:2,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[979,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination: false,
			navigation:true,
			navigationText:["",""],
			slideSpeed:1000,
			autoPlay:false
		});

		
			
	}); 		

	AOS.init();
			
})(jQuery);


  


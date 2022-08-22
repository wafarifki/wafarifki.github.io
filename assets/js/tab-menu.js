
jQuery(document).ready(function(){

	jQuery('.tab-buttons li a').click(function(){

		var handler = jQuery(this);
		var rel = handler.data('rel');
		var parent = handler.parent();

		if(parent.hasClass('selected')){
		}else{
			
			jQuery('.tab-buttons li').removeClass('selected');
			parent.addClass('selected');

			jQuery('.tab-container > div').hide();
			jQuery('.tab-container #'+rel).show();
		}

		return false;

	});
});

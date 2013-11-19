// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
	// $('.quantity').val('Put number here');

	$('.add-to-cart-button').click(function () {

		var quantity_text_box = $(this).siblings('.quantity');
		var value = quantity_text_box.val();

		var value_int = parseInt(value);

		if (value_int > 0) {
			//Make an AJAX call
			$.post('/store/add_cart', {
				quantity : value_int
			})
		}
		else {alert (value + ' is not a number.');
	}

	});
	
});
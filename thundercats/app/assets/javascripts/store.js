// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
	$(document).on('click', '#toggle_cart_button', function () {

		var display = $('#cart_detail').css('display');

		if (display == "none") {
			$('#cart_detail').slideDown();
		} else {
			$('#cart_detail').slideUp();
		}
	});
	// $('.quantity').val('Put number here');

	$('.add-to-cart-button').click(function () {

		var quantity_text_box = $(this).siblings('.quantity');
		var value = quantity_text_box.val();

		var value_int = parseInt(value);

		var product_id = $(this).data('product-id');
		var product_name = $(this).data('product-name');
		var price = $(this).data('price');

		//Do something here

		if (value_int > 0) {
			//Make an AJAX call
			$.post('/store/add_cart', {
				quantity : value_int,
				product_id : product_id,
				product_name : product_name,
				price : price
			})
		}
		else {alert (value + ' is not a number.');
	}

	});
	
});
$(document).ready(function() {
	$('.workadd').on('click', function(event) {
		event.preventDefault();

		$('.popup').bPopup({
			closeClass: 'popup-close'
		})
	});
});

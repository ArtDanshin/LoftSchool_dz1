$(document).ready(function() {
	$('.workadd').on('click', function(event) {
		event.preventDefault();

		$('.popup').bPopup({
			closeClass: 'popup-close'
		})
	});

	jQuery('input[placeholder], textarea[placeholder]').placeholder();

	$('.popup-input-file').on('change', function(){
		var
			$this = $(this),
			value = $this.val(),
			pureVal = value.replace(/c:\\fakepath\\/gmi, "");
			if (pureVal === '') {
				pureVal = 'Загрузите изображение';
			}
		$('.popup-input-fake').text(pureVal);

	});
});

var contactMe = (function() {

	//Инициализируем модуль
	var init = function() {
		_setUpListners();
	};

	//Прослушиваем события
	var _setUpListners = function() {
		$("#feedback-form").on('submit', _submitForm);
	};

	//Отправка формы
	var _submitForm = function(event){
		console.log('Отправка формы')
		event.preventDefault();

		var form = $(this),
			url = 'feedback.php',
			defObj = _ajaxForm(form, url);

			//Действие с ответом с сервера defObj
	};

	var _ajaxForm = function(form, url) {
		console.log('Ajax запрос')
		if (!validation.validateForm(form)) return false;
		// Если false, то код ниже не выполнится

	};

	return {
		init: init
	}
})();

contactMe.init();

jQuery('input[placeholder], textarea[placeholder]').placeholder();


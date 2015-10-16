var аuth = (function() {

	//Инициализируем модуль
	var init = function() {
		_setUpListners();
	};

	//Прослушиваем события
	var _setUpListners = function() {
		$("#authform").on('submit', _submitForm);
	};

	//Отправка формы
	var _submitForm = function(event){
		event.preventDefault();

		var form = $(this),
			url = 'auth.php',
			defObj = _ajaxForm(form, url);

			//Действие с ответом с сервера defObj
	};

	var _ajaxForm = function(form, url) {
		if (!validation.validateForm(form)) return false;
		// Если false, то код ниже не выполнится

	};

	return {
		init: init
	}
})();

if (typeof console === "undefined" || typeof console.log === "undefined") {
     console = {};
     console.log = function() {};
 	};

аuth.init();
jQuery('input[placeholder], textarea[placeholder]').placeholder();
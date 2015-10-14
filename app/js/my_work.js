$(document).ready(function() {
	jQuery('input[placeholder], textarea[placeholder]').placeholder();

	$('.popup-input-file').on('change', function(){
		var
			$this = $(this),
			value = $this.val(),
			pureVal = value.replace(/c:\\fakepath\\/gmi, "");
			console.log(pureVal);
			console.log(this);
			if (pureVal === '') {
				pureVal = 'Загрузите изображение';
			}
		$('.popup-input-fake').text(pureVal);

	});
})

//New JS File - Video LoftBlog

var myModule = (function () {

// Инициализация
	var init = function () {
		_setUpListners();
	};

// Прослушивание событий
	var _setUpListners = function () {
		$('.workadd').on('click', _showModal); //Открыть Popup
		$('#add-project-form').on('submit', _addProject);
	};

//Popup
	var _showModal = function (event) { 
		event.preventDefault();

		var divPopup = $('.popup'),
			form = divPopup.find('form');

		divPopup.bPopup({
			closeClass: 'popup-close',
			onClose: function() {
				form.trigger('reset');
			}
		});
	};

//Добавление проекта
	var _addProject = function (event) {
		event.preventDefault();

		var form = $(this),
			url = 'add_project.php',
			defObj = _ajaxForm(form,url)

		//Если JS валидация успешна, то Ajax запрос на сервер
		if (defObj) {
			defObj.done(function(ans) {
				if (ans.status ==='OK') {
					console.log(ans.text);
				} else {
					console.log(ans.text);
				}
			})
		}
	};

//Универсальня функция
// Для ее работы используется
// @form - форма
// @url - адрес php файла к которому мы обращаемся
// 1. Собирает данные из формы
//2. Проверяет форму
// 3. Делает запрос на сервер и возвращает ответ с сервера
var _ajaxForm = function (form, url) {

		if (!validation.validateForm(form)) return false;

		data = form.serialize();

		var result = $.ajax({
				url: url,
				type: 'POST',
				dataType: 'json',
				data: data
				})
				.fail(function(ans) {
					console.log('Проблемы в PHP');
				});

		return result;
	};

//Возвращаем значения
	return {
		init: init
	}
})();

myModule.init();
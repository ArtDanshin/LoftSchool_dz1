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
		$('.popup').bPopup({
			closeClass: 'popup-close',
			onClose: function() {

			}
		});
	};

//Валидация и добавление проекта
	var _addProject = function (event) {
		console.log('I am super Hero!');
		event.preventDefault();

		//Объявляем переменые
		var form = $(this),
			url = 'add_project.php',
			myServerGiveMeAnswer = _ajaxForm(form,url)
			console.log(data);

		//Ajax запрос на сервер
		myServerGiveMeAnswer.done(function(ans) {
			if (ans.status ==='OK') {
				console.log(ans.text);
			} else {
				console.log(ans.text);
			}
		})
	};

//Универсальня функция
// Для ее работы используется
// @form - форма
// @url - адрес php файла к которому мы обращаемся
// 1. Собирает данные из формы
//2. Проверяет форму
// 3. Делает запрос на сервер и возвращает ответ с сервера
var _ajaxForm = function (form, url) {

		//if (!valid) return false;

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
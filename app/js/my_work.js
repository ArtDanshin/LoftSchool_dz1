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
		console.log('I am Hero!');
		event.preventDefault();
		$('.popup').bPopup({
			closeClass: 'popup-close'
		});
	};

//Валидация и добавление проекта
	var _addProject = function (event) {
		console.log('I am super Hero!');
		event.preventDefault();

		//Объявляем переменые
		var form = $(this),
			url = 'add_project.php',
			data = form.serialize();

		console.log(data);

		//Ajax запрос на сервер
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		})
		.done(function(ans) {
			console.log("success");
			console.log(ans);
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
}

//Возвращаем значения
	return {
		init: init
	}
})();

myModule.init();
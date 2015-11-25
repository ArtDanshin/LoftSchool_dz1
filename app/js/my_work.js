var myModule = (function () {

// Инициализация
	var init = function () {
		_setUpListners();
	};

// Прослушивание событий
	var _setUpListners = function () {
		$('.wrap-workadd').on('click', _showModal); //Открыть Popup
		$('#add-project-form').on('submit', _addProject);
	};

//Добавление файла в форму
	var _changeFile = function () {
		var $this = $(this),
			value = $this.val(),
			pureVal = value.replace(/c:\\fakepath\\/gmi, "");
		if (pureVal === '') {
				pureVal = 'Загрузите изображение';
			};
		$('.popup-input-fake').val(pureVal).trigger('hideTooltip').removeClass('input-error');	

	}

//Popup
	var _showModal = function (event) { 
		event.preventDefault();

		var divPopup = $('.popup'),
			form = divPopup.find('form');

		divPopup.bPopup({
            positionStyle: 'absolute',
			closeClass: 'popup-close',
			onClose: function() {
				form.trigger('reset');
			}
		});
	};

// Добавление проекта
	var _addProject = function (event) {
		event.preventDefault();

		var form = $(this),
			url = 'php/add_project.php',
			data = form.serialize();

		if (!validation.validateForm(form)) return false;

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			if (ans.status ==='OK') {
				location.reload();
			} 
		})
		.fail(function(ans) {
			console.log('Проблемы в PHP');
		})
	};

//Возвращаем значения
	return {
		init: init
	}
})();

if (typeof console === "undefined" || typeof console.log === "undefined") {
     console = {};
     console.log = function() {};
	};
	
myModule.init();

jQuery('input[placeholder], textarea[placeholder]').placeholder();
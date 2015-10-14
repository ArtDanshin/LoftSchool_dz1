var validation = (function () {

	// Инициализируем наш модуль
	var init = function () {
		_setUpListners();
	};

	// Прослушиваем события 
	var _setUpListners = function () {
		$('form').on('keydown', '.input-error', _removeError);
		$('form').on('reset', _clearForm);
	};

	var _removeError = function () {
		$(this).removeClass('input-error');
	};

	var _clearForm = function (form) {
		var form = $(this);
		console.log('Lol');
		form.find('input, textarea').trigger('hideTooltip');
		form.find('.input-error').removeClass('input-error')
	};

	//Создает qTip
	var _createQtip = function (element, position) {

		//Позиция qTip
		if (position === 'rigth') {
			position = {
				my: 'left center',
				at: 'right center'
			}
		} else {
			position = {
				my: 'right center',
				at: 'left center',
				adjust: {
					method: 'shift none'
				}
			};
		}

		// Инициализируем qTip
		element.qtip({
			content : {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show'
			},
			hide: {
				event: 'keydown hideTooltip'
			},
			position: position,
			style: {
				classes: 'qtip-mystyle qtip-rounded',
				tip: {
					height: 3,
					width: 10
				}
			}
		}).trigger('show');
	};

	//Валидация формы (Универсальная функция)
	var validateForm = function (form) {

		console.log('Валидация');
		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;

		//Пройдемся по всем элементам формы
		$.each(elements, function (index, val){
			var element = $(val),
				val = element.val();
				pos = element.attr('qtip-position');

			if (val.length === 0) {
				element.addClass('input-error');
				_createQtip(element, pos);
				valid = false;
			}
		});

		return valid;
	};

	//Возвращаем объект (Публичные методы)
	return {
		init: init,
		validateForm: validateForm
	}
})();

validation.init();
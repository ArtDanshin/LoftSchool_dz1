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

		$('#fileproj').fileupload()

		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(ans) {
			if (ans.status ==='OK') {
				console.log(ans.text);
			} else {
				console.log(ans.text);
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





var fileDownload = (function () {

// Инициализация
	var init = function () {
		_setUpListners();
	};

// Прослушивание событий
	var _setUpListners = function () {
		_downloadImg('#fileproj');
	};

// Загрузка изображения
	var _downloadImg = function (input) {

		// Определяем элементы, с которыми будем работать
        var inputFile = $(inputFile),
        	nameFileInput = $('.popup-input-fake'),
        	urlFileInput = $('.popup-input-fake-url');

        //Инициализируем FileUpload
		$(input).fileupload({

            // Папка где располагается PHP скрипт jQuery File Upload 
            url: 'php/add_image.php',

            // Функция, выполняющаяся при отправке данных на сервер
            add: function(e, data) {
                data.submit();
            },

            // В случае успеха на сервере, выполняем эту функцию
            success: function(data) {

                // Сохраняем путь до файла на сервере в скрытый Input
                urlFileInput.val(data.url);

                // Выводим имя загруженного файла
                nameFileInput.val(data.name).trigger('hideTooltip').removeClass('input-error');

                console.log('done');
            }
		})
	}

//Возвращаем значения
	return {
		init: init
	}
})();

fileDownload.init();
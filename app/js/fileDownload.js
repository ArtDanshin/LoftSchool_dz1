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
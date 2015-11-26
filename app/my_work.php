<?php
  session_start();
?>
<!DOCTYPE html>
<html lang="ru-Ru">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Мои Работы</title>
	<!-- SEO-->
	<meta name="description" content="LoftSchool Dz1 Artem Danshin">
	<meta name="keywords" content="LoftSchool,dz1,artem,danshin">
	<meta name="author" content="Artem Danshin">
	<!-- favicon.ico-->
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<!-- bower CSS -->
	<link rel="stylesheet" type="text/css" href="bower/normalize-css/normalize.css">
	<link rel="stylesheet" type="text/css" href="bower/qtip2/jquery.qtip.css">
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="fonts/opensans.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/my_work.css">
	<!-- modernizer-->
	<script src="bower/modernizer/modernizr.js"></script>
</head>
<body>
	<div class="wrapper">
		<div class="main-content">
			<header class="page-header">
				<div class="container-big">
					<a class="header-logo-link" href="index.html">
						<img src="img/logo.png" height="71" width="95" alt="logo" class="logo-img">
						<span class="header-logo-text">Сайт портфолио Артёма Даньшина</span>
					</a>
					<ul class="socials">
						<li class="socials-item">
							<a href="http://vk.com/silver_dragoon" target="_blank" class="socials-link vk">vk.com</a>
						</li>
						<li class="socials-item">
							<a href="https://twitter.com/SilverDragoonDJ" target="_blank" class="socials-link tw">twitter.com</a>
						</li>
						<li class="socials-item">
							<a href="https://www.facebook.com/silverdragoon" target="_blank" class="socials-link fb">facebook.com</a>
						</li>
						<li class="socials-item">
							<a href="https://github.com/SilverDragoon" target="_blank" class="socials-link git">github.com</a>
						</li>
					</ul>
				</div>
			</header>
			<div class="container">
				<!-- Сайдбар -->
				<aside class="sidebar">
					<nav class="navigation">
						<ul class="navigation-list">
							<li class="navigation-item">
								<a href="index.php" class="navigation-link">Обо мне</a>
							</li>
							<li class="navigation-item current">
								<a href="" class="navigation-link">Мои Работы</a>
							</li>
							<li class="navigation-item">
								<a href="feedback.php" class="navigation-link">Обратная связь</a>
							</li>
						</ul>
					</nav>
					<address class="contacts">
						<h2 class="contacts-header">Контакты</h2>
						<div class="contacts-body">
							<ul class="contacts-list">
								<li class="contacts-item">
									<a href="mailto:silvir007@gmail.com" class="link mail">silvir007@gmail.com</a>
								</li>
								<li class="contacts-item">
									<a href="tel:+79162277100" class="link phone">+79162277100</a>
								</li>
								<li class="contacts-item">
									<a href="skype:silver.dragoon" class="link skype">silver.dragoon</a>
								</li>
							</ul>
						</div>
					</address>
				</aside>
				<!-- Изменяемый контент-->
				<div class="variable-content">
					<section class="workbox">
						<h2 class="workbox-header">Мои работы</h2>
						<div class="workbox-body">
							<ul class="worklist">
								<?php 
									$dbc = mysqli_connect('localhost', 'root', '', 'silver4275_loft1');

									$query = "SELECT * FROM portfolio";
									$data = mysqli_query($dbc, $query);

									while ($row = mysqli_fetch_array($data)) {
										echo '<li class="worklist-item">';
											echo '<div class="wrap-workimg">';
												echo '<a href="#"><img src="php/' . $row['img'] . '" alt="' . $row['site'] . ' site" class="workimg"></a>';
												echo '<a href="#" class="worklink-img">Подробнее</a>';
											echo '</div>';
											echo '<a class="worklink" href="' . $row['url'] . '">' . $row['site'] . '</a>';
											echo '<p class="workdescription">' . $row['text'] . '</p>';
									}

									mysqli_close($dbc);
									if ( isset($_SESSION['username']) ) {
								?>
								<li class="worklist-item">
									<div class="wrap-workadd">
										<span class="workadd" >Добавить проект</span>
									</div>
								</li>
								<?php
									}
								?>
							</ul>
						</div>
					</section>
				</div>
			</div>
			<div class="popup">
				<p class="popup-head">Добавление проекта</p>
				<div class="wrap-popup-form">
					<form action="php/add_project.php" name="addWork" enctype="multipart/form-data" method="POST">
						<div class="wrap-popup-form-inner">
							<div class="wrap-popup-input">
								<div class="popup-input-head">Название проекта</div>
								<input type="text" class="popup-input" name="nameproj" placeholder="Введите название" qtip-content="введите название" qtip-position="left">
							</div>
							<div class="wrap-popup-input">
								<div class="popup-input-head">Картинка проекта</div>
								<div class="wrap-popup-input-file" >
									<input type="text" class="popup-input-fake" name="filename" placeholder="Загрузите изображение" qtip-content="изображение" qtip-position="left" disabled>
									<input type="text" class="popup-input-fake-url" name="filenameurl">
									<label class="wrap-file-icon">
										<input type="file" class="popup-input-file" id="fileproj" name="fileproj">
										<div class="popup-input-img"></div>
									</label>
								</div>
							</div>
							<div class="wrap-popup-input">
								<div class="popup-input-head">URL проекта</div>
								<input type="text" class="popup-input" name="urlproj" placeholder="Добавьте ссылку" qtip-content="ссылка на проект" qtip-position="left">
							</div>
							<div class="wrap-popup-input">
								<div class="popup-input-head">Описание</div>
								<textarea class="popup-input-textarea" name="descproj" placeholder="Пара слов о Вашем проекте" qtip-content="описание проекта" qtip-position="left"></textarea>
							</div>
							<div class="wrap-popup-button">
								<input type="submit" class="popup-button" value="Добавить">
							</div>
							<a href="#" class="popup-close">X</a>
						</div>
					</form>
				</div>
			</div>
			</div>
		</div>
	</div>
	<footer class="page-footer">
		<div class="container">
			<div class="lock">
				<?php
					if ( !isset($_SESSION['username']) ) {
						echo '<a href="auth.php" class="lock-inner">вход</a>';
					} else {
						echo '<a href="php/logout.php" class="lock-inner">выход</a>';
					}
				?>
			</div>
			<div class="copyright">2015, Это сайт Артёма Даньшина, пожалуйста, не копируйте и не воруйте его
			</div>
		</div>
	</footer>
	<script src="bower/jquery/dist/jquery.js"></script>
	<script src="bower/bpopup/jquery.bpopup.min.js"></script>
	<script src="bower/jquery-placeholder/jquery.placeholder.min.js"></script>
	<script src="bower/qtip2/jquery.qtip.min.js"></script>
	<script src="bower/blueimp-file-upload/js/vendor/jquery.ui.widget.js"></script>
	<script src="bower/blueimp-file-upload/js/jquery.iframe-transport.js"></script>
	<script src="bower/blueimp-file-upload/js/jquery.fileupload.js"></script>
	<script src="bower/blueimp-file-upload/js/jquery.fileupload-process.js"></script>
	<script src="bower/blueimp-file-upload/js/jquery.fileupload-ui.js"></script>
	<script src="js/validation.js"></script>
	<script src="js/my_work.js"></script>
	<script src="js/fileDownload.js"></script>
</body>
</html>
<?php

	$name = $_POST['nameproj'];
	$data = array();

	if ($name === '') {
		$data['status'] = 'ERROR!';
		$data['text'] = 'Заполните имя!';
	} else {
		$data['status'] = 'OK';
		$data['text'] = 'Вы молодец! Имя заполнено!';
	}
	

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>
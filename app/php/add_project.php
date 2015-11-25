<?php
	$name = $_POST['nameproj'];
	$url = $_POST['urlproj'];
	$text = $_POST['descproj'];
	$file_name = $_POST['filenameurl'];

	$dbc = mysqli_connect('localhost', 'SilverDragoon', '070707', 'silver4275_loft1');

	$query = "INSERT INTO portfolio VALUES ('$name', '$url', '$text', '$file_name')";

	mysqli_query($dbc, $query);

	mysqli_close($dbc);

	$data = array();

	$data['status'] = 'OK';
	
	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>
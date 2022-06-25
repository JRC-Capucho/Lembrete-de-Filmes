<?php 
	$host = "localhost";
	$user = "root";
	$pass = "";
	$database = "dbnext";
	$port = "3306";

	$conn = new PDO("mysql:host=$host;port=$port;dbname=" .$database, $user, $pass);
?>

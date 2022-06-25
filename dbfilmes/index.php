<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


//connection
include_once 'db.php';

$queryFilmes = "SELECT id, tittle, genre, topcast, pov FROM avaliacaofilmes";
$buscarFilmes = $conn->prepare($queryFilmes);
$buscarFilmes->execute();
if(($buscarFilmes) && ($buscarFilmes->rowCount() != 0)){
	while($aux = $buscarFilmes->fetch(PDO::FETCH_ASSOC)){
		extract($aux);
		
		$listarFilmes["register"][$id] = [
			'id' => $id,
			'tittle' => $tittle,
			'genre' => $genre,
			'topcast' => $topcast,
			'pov' => $pov
		];
		
	}

	// 200 = OK
	http_response_code(200);

	echo json_encode($listarFilmes);
}

?>

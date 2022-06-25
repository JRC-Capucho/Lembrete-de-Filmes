<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'db.php';
//$id = 2;
$id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
$response = "";

$querySearch = "SELECT id, tittle, genre, topcast, pov FROM avaliacaofilmes WHERE id=:id";
$searchMovie = $conn->prepare($querySearch);

$searchMovie->bindParam(':id', $id);
$searchMovie->execute();


if(($searchMovie) && ($searchMovie->rowCount() != 0)){
    $aux = $searchMovie->fetch(PDO::FETCH_ASSOC);
    extract($aux);
    $movie = [
            'id' => $id,
			'tittle' => $tittle,
			'genre' => $genre,
			'topcast' => $topcast,
			'pov' => $pov
    ];
    $response = [
        "error" => false,
        "movie" => $movie,
        "msg" => "Movie encontrado com sucesso!"
    ];
}else
    $response = [
        "error" => true,
        "msg" => "Movie não encontrado"
    ];

http_response_code(200);

echo json_encode($response);
?>
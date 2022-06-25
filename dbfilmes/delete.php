<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");



include_once 'db.php';


$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);

$response = "";

$queryDelete = "DELETE FROM avaliacaofilmes WHERE id=:id";
$deleteMovie = $conn->prepare($queryDelete);

$deleteMovie->bindParam(':id', $id);

if ($deleteMovie->execute())
    $response = [
        "error" => false,
        "alert" => "Filme apagado com sucesso!"
    ];
else
    $response = [
        "error" => true,
        "alert" => "Falha em apagar o filme"
    ];

http_response_code(200);

echo json_encode($response);

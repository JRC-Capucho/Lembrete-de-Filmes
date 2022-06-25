<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");


include_once 'db.php';

$responseJson = file_get_contents("php://input");
$data = json_decode($responseJson, true);


if ($data) {
    $queryEdit = "UPDATE avaliacaofilmes SET tittle=:tittle, genre=:genre, topcast=:topcast, pov=:pov WHERE id=:id";
    $editMovie = $conn->prepare($queryEdit);

    $editMovie->bindParam(':tittle', $data['tittle']);
    $editMovie->bindParam(':genre', $data['genre']);
    $editMovie->bindParam(':topcast', $data['topcast']);
    $editMovie->bindParam(':pov', $data['pov']);
    $editMovie->bindParam(':id', $data['id']);

    $editMovie->execute();

    if ($editMovie->rowCount() != 0)
        $response = [
            "error" => false,
            "alert" => "Editado com  sucesso!",
            "data" => $data

        ];
    else
        $response = [
            "error" => true,
            "alert" => "Falha ao editar",
            "data" => $data
        ];
} else
    $response = [
        "error" => true,
        "alert" => "Falha ao editar",
    ];

http_response_code(200);

echo json_encode($response);

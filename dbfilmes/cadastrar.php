<?php 

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
//header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE");

include_once 'db.php';

$responseJson = file_get_contents("php://input");
$data = json_decode($responseJson, true);

if($data){

    $queryInsertMovie = "INSERT INTO avaliacaofilmes (tittle,genre,topcast,pov) VALUES (:tittle, :genre, :topcast, :pov)";
    $cadastrarMovie = $conn->prepare($queryInsertMovie);

    $cadastrarMovie->bindParam(':tittle', $data['movie']['tittle']);
    $cadastrarMovie->bindParam(':genre', $data['movie']['genre']);
    $cadastrarMovie->bindParam(':topcast', $data['movie']['topcast']);
    $cadastrarMovie->bindParam(':pov', $data['movie']['pov']);
    $cadastrarMovie->execute();

    if($cadastrarMovie->rowCount())
        $response = [
            "error" => false,
            "alert" => "Cadastro realizado com sucesso!",
        ];
    else    
        $response = [
        "error" => true,
        "alert" => "Erro ao cadastrar o filme",
        ];
}else
    $response = [
    "erro" => true,
    "alert" => "Erro ao cadastrar o filme",
    ];
    
http_response_code(200);
echo json_encode($response);

<?php 
    // для того чтобы на back-end получить данные в json:
    $_POST = json_decode(file_get_contents("php://input"), true);
    
    echo var_dump($_POST); // позволяет увидеть даные которые приходят с клиентом   
?>
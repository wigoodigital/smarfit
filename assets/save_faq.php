<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    $json = file_get_contents('php://input');

    $fp = fopen('json/faq.json', 'w');
    fwrite($fp, $json);
    fclose($fp);

    echo "ok";
?>
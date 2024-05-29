<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = htmlspecialchars($_POST['product']);
    $material = htmlspecialchars($_POST['material']);
    $quantity = htmlspecialchars($_POST['quantity']);

    if (!empty($product) && !empty($material) && !empty($quantity)) {
        echo "<!DOCTYPE html>
        <html lang='uk'>
        <head>
            <meta charset='UTF-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Підтвердження замовлення</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Ваше замовлення прийнято</h1>
            <p>Замовлено виріб - $product</p>
            <p>Матеріал - $material</p>
            <p>Кількість - $quantity</p>
        </body>
        </html>";
    } else {
        echo "Помилка: Всі поля повинні бути заповнені.";
    }
} else {
    echo "Неправильний метод запиту.";
}
?>
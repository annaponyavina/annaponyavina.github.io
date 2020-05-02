<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $content = ' Имя ' . $name . ' номер телефона ' . $phone;
    if (array_key_exists('time', $_POST)) {
        $content .= ' желаемая дата ' . $_POST['time'];
    }

    $success = mail("admin@shef.com", 'Запрос на расчет стоимости', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
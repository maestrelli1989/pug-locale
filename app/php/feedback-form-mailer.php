<?php

    $message = '
	Ім\'я: ' . $_POST['firstName'] . '
    E-mail: ' . $_POST['email'] . '
    Телефон: ' . $_POST['phone'] . '
    Повідомлення: ' . $_POST['message'];

    $email = $_POST['email'];

    $mail = array(  
        'to' => "sales@uapay.ua",  
        'subject' => "Нове повідомлення",  
        'message' => $message,  
        'headers' => "MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n"."From: $email\r\n"
    );  
    mail($mail['to'], $mail['subject'], $mail['message'], $mail['headers']);
    header('Refresh: 5; URL=/ua');
    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h3>Ваше повідомлення було відправлено</h3>
    <p>Ми відповімо вам вже найближчим часом.</p>
    <p>Через 5 секунд ви повернетесь на головну сторінку.</p></body>');
    $title = 'Повідомлення відправлено';
    

?>
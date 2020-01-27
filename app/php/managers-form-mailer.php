<?php

    $mess = '
	Ім\'я: ' . $_POST['firstName'] . '
	Прізвище: ' . $_POST['lastName'] . '
    E-mail:' . $_POST['email'] . '
    Телефон:' . $_POST['phone'] . '
	Вебсайт: ' . $_POST['website'] . '
	Оборот: ' . $_POST['turnover'] . '
    Повідомлення: ' . $_POST['message'];

    $headers = "From: $email\r\nReply-To: $email" . "\r\n" . "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8";

    mail('aerofan@ukr.net', 'Форма обратной связи', $mess, $headers);
    header('Refresh: 5; URL=https://uapay.ua');
    echo ('<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><h3>Ваше сообщение отправлено</h3>
    <p>Мы свяжемся с вами в ближайшее время.</p>
    <p>Через 5 секунд вы вернетесь на главную страницу.</p></body>');
    $title = 'Сообщение отправлено';

?>
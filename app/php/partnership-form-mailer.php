<style>
	* { margin: 0; padding: 0; }
	body { text-align: center; }
	.fa-check { font-size: 300px!important; line-height: 300px; color: #7ed321; padding-top: 150px; }
	.text { color: #292828; font-weight: 500; text-align: center; font-size: 16px; line-height: 24px; }
	.link {
		color: #292828;
		font-size: 1.15em;
		font-weight: 700;
		-webkit-transition: all 500ms;
		-moz-transition: all 500ms;
		-o-transition: all 500ms;
		transition: all 500ms;
		position: relative;
		text-decoration: none;
	}
	.link:before {
		position: absolute;
		display: block;
		content: '';
		width: 100%;
		height: 1px;
		background-color: #292828;
		top: 19px;
		left: 0;
		opacity: 1;
		transition: all 500ms linear;
	}
	.link:hover:before { opacity: 0; }
</style>

<?php
	$to = [
		"tiutin-ss@ukrposhta.ua"
	];

	function get_data($smtp_conn) {
		
		$data=" ";
		
		while($str = fgets($smtp_conn, 515)) {
			
			$data .= $str;
			
			if(substr($str, 3, 1) == " ") {
				break;
			}

		}

		return $data;
	}

	function send_mail($to = null) {
		
		date_default_timezone_set('UTC');
		
		$from = $_POST['email'];
		$encoding = "utf-8";

		$headers = "Content-type: text/html; charset=".$encoding." \r\n";
		$headers .= "MIME-Version: 1.0 \r\n";
		$headers .= "Content-Transfer-Encoding: 8bit \r\n";
		$headers .= "Date: ".date("r (T)")." \r\n";

		$first_name_field = $_POST['firstName'];
		$last_name_field = $_POST['lastName'];
		$email_field = $_POST['email'];
		$phone_field = $_POST['phone'];
		$website_field = $_POST['website'];
		$message_field = $_POST['message'];
		
		$body = "
			<p><b>Ім'я:</b> $first_name_field</p>
			<p><b>Прізвище:</b> $last_name_field</p>
			<p><b>Email:</b> $email_field</p>
			<p><b>Телефон:</b> $phone_field</p>
			<p><b>Веб-сайт:</b> $website_field</p>
			<p><b>Повідомлення:</b> $message_field</p>
		";

		$fp = fsockopen("10.255.101.111", 25, $errno, $errstr, 30);
		$data = get_data($fp);

		fputs($fp,"EHLO ukrposhta.ua\r\n");
		$data = get_data($fp);

		fputs($fp,"AUTH LOGIN\r\n");
		$data = get_data($fp);

		fputs($fp,base64_encode("ukrposhta\site-noreply")."\r\n");
		$data = get_data($fp);

		fputs($fp,base64_encode("qwert-1234")."\r\n");
		$data = get_data($fp);

		fputs($fp,"MAIL FROM:$from\r\n");
		$data = get_data($fp);

		fputs($fp,"RCPT TO:$to\r\n");
		$data = get_data($fp);

		fputs($fp,"DATA\r\n");
		$data = get_data($fp);

		fputs($fp,$headers."\r\n".$body."\r\n.\r\n");
		$data = get_data($fp);

		fputs($fp,"QUIT\r\n");
		$data = get_data($fp);

		substr($data,0,3);

	}

	if(isset($_POST['submit'])) {
		
		foreach ($to as $val) {
			send_mail($val);
		}

		echo '
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
			<link rel="shortcut icon" href="../assets/images/favicons/favicon.ico">
			<link rel="apple-touch-icon" sizes="57x57" href="../assets/images/favicons/apple-icon-57x57.png">
			<link rel="apple-touch-icon" sizes="60x60" href="../assets/images/favicons/apple-icon-60x60.png">
			<link rel="apple-touch-icon" sizes="72x72" href="../assets/images/favicons/apple-icon-72x72.png">
			<link rel="apple-touch-icon" sizes="76x76" href="../assets/images/favicons/apple-icon-76x76.png">
			<link rel="apple-touch-icon" sizes="114x114" href="../assets/images/favicons/apple-icon-114x114.png">
			<link rel="apple-touch-icon" sizes="120x120" href="../assets/images/favicons/apple-icon-120x120.png">
			<link rel="apple-touch-icon" sizes="144x144" href="../assets/images/favicons/apple-icon-144x144.png">
			<link rel="apple-touch-icon" sizes="152x152" href="../assets/images/favicons/apple-icon-152x152.png">
			<link rel="apple-touch-icon" sizes="180x180" href="../assets/images/favicons/apple-icon-180x180.png">
			<link rel="icon" type="image/png" sizes="192x192" href="../assets/images/favicons/android-icon-192x192.png">
			<link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicons/favicon-32x32.png">
			<link rel="icon" type="image/png" sizes="96x96" href="../assets/images/favicons/favicon-96x96.png">
			<link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicons/favicon-16x16.png">
			<link rel="manifest" href="../assets/images/favicons/manifest.json">
			<meta name="msapplication-TileColor" content="#ffffff">
			<meta name="msapplication-TileImage" content="../assets/images/favicons/ms-icon-144x144.png">
			<meta name="theme-color" content="#ffffff">
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
			<i class="fas fa-check" aria-hidden="true"></i>
			<p class="text">Повернутися на попередню <a href="/ua/partnership" class="link">сторінку</a>.</p>
		';

	}
?>
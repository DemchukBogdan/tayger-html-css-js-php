<?php

/* https://api.telegram.org/bot1475864264:AAH9a0xFMBhQOIrlHTHtaGrgJPIqtjzs7T8/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "1333861AAG_40KyZvG1FhoJcEYdaatodxBKFHFah8c";
$chat_id = "021613";


$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Емейл ' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
};



?>

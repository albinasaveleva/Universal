<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$theme_feedback = $_POST['theme_feedback'];
$message_feedback = $_POST['message_feedback'];
$agreement_checkbox = $_POST['agreement_checkbox'];
$email_feedback = $_POST['email_feedback'];
$email_subscription = $_POST['email_subscription'];
$comment_text = $_POST['comment_text']; 

// Формирование самого письма
$title_feedback = "Новое обращение Universal";
$body_feedback = "
<h2>Новое обращение</h2>
<b>Тема:</b> $theme_feedback<br><br>
<b>Сообщение:</b><br>$message_feedback<br><br>
<b>Email:</b><br>$email_feedback<br><br>
<b>Согласие на обработку данных:</b><br>$agreement_checkbox
";

$title_subscription = "Новое обращение Universal";
$body_subscription = "
<b>Email:</b> $email_subscription<br>

";

$title_comment = "Новый комментарий Universal";
$body_comment = "
<b>Комментарий:</b> $comment_text<br>

";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'test.mail.saveleva.albina@gmail.com'; // Логин на почте
    $mail->Password   = 'test_mail_ololo_cfdtkmtdf'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('test.mail.saveleva.albina@gmail.com', 'Альбина Савельева'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('saveleva.albina.96@mail.ru');  
    $mail->isHTML(true);

    // Отправка сообщения
    if (!empty($email_subscription)){
        $mail->Subject = $title_subscription;
        $mail->Body = $body_subscription;
    } else  if (!empty($email_feedback)){
        $mail->Subject = $title_feedback;
        $mail->Body = $body_feedback;
    } else {
        $mail->Subject = $title_comment;
        $mail->Body = $body_comment;
    }

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
    header('Location: thankyou.html');  
?>
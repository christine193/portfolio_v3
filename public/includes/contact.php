

<?php 
function send_msg(){
    //EMAIL VALIDATION
    if(empty($_POST['name'])
        || empty($_POST['email'])
        || empty($_POST['message'])){
        header("Location:../Contact.vue");
        exit;
    }
    $to = 'contact@christinelopez.ca';
    $subject = 'Christine Lopez - sent from '.$_POST['name'];
    $message = $_POST['message'];
    $headers = 'From:contact@christinelopez.ca';
    $headers .= '   Reply-To: '.$_POST['email'];
    mail($to, $subject, $message, $headers);
}
send_msg();
header("Location: ../Contact.vue");
 ?>
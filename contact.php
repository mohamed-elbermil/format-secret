<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Clé secrète reCAPTCHA
    $recaptcha_secret = '6LecjB0qAAAAAM-womgVtz1H72hWua_wvddd-g7A';
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // Vérification du reCAPTCHA
    $verify_response = file_get_contents(
        'https://www.google.com/recaptcha/api/siteverify?secret=' .
            $recaptcha_secret .
            '&response=' .
            $recaptcha_response
    );
    $response_data = json_decode($verify_response);

    if ($response_data->success && $response_data->score >= 0.5) {
        // Le score reCAPTCHA est suffisant, traitez le formulaire
        $name = strip_tags(trim($_POST['name']));
        $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $subject = strip_tags(trim($_POST['subject']));
        $message = strip_tags(trim($_POST['message']));

        // Adresse e-mail de destination
        $to = 'contact@formasecret.fr';

        $headers = "Reply-To: $email" . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        $email_content = "
        <html>
        <body>
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Sujet:</strong> $subject</p>
            <p><strong>Message:</strong><br>$message</p>
        </body>
        </html>
        ";

        if (mail($to, $subject, $email_content, $headers)) {
            echo json_encode([
                'status' => 'success',
                'message' => 'Votre message a été envoyé avec succès.',
            ]);
        } else {
            echo json_encode([
                'status' => 'error',
                'message' =>
                    "Désolé, une erreur s'est produite lors de l'envoi du message.",
            ]);
        }
    } else {
        echo json_encode([
            'status' => 'error',
            'message' =>
                'La vérification reCAPTCHA a échoué. Veuillez réessayer.',
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'Méthode de requête non autorisée.',
    ]);
}
?>

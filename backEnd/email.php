<?php

if(isset($_POST['email']) && !empty($_POST['email'])){
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['msg']);

    $para = "contato@capsstore.com.br";
    $assunto = "Contato - Site Caps Store Brasil";
    $corpoEmail = "Nome: ".$nome. "\r\n".
                "Email: ".$email. "\r\n".
                "Mensagem: ".$mensagem. "\r\n";
    $cabecalho = "From:site@capsstore.com.br"."\r\n". //tem que ter o msm dominio do servidor de hospedagem
                "Reply-To:".$email."\r\n".
                "X=Mailer:PHP/".phpversion();

    if(mail($para, $assunto, $corpoEmail, $cabecalho)){
        header ("location: ../index.html");
    } else {
        set_time_limit(10);
        echo("ERRO email nao enviado, volte e tente novamente");
        header ("location: ../contato.html");
    }

}
?>
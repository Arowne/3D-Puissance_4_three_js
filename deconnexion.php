<?php
require ('model/set_php.php');
$_SESSION=array();
unset($_COOKIE['email']);
unset($_COOKIE['mdp']);
setcookie('email','',time()-3600, '/');
setcookie('mdp','',time()-3600, '/');
session_destroy();
?>
<script type="text/javascript">window.location='index.php?page=acceuil'</script>

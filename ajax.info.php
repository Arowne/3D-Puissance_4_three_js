<?php
require_once('model/set_php.php');
$erreur = array();


$mailExist = $dbconnexion->reqDbObj('SELECT * FROM inscrit WHERE mail = ?',array($_POST['mail']));
if (count($mailExist) != 0) {
	array_push($erreur, 'mail');
}

$pseudoExist = $dbconnexion->reqDbObj('SELECT * FROM inscrit WHERE pseudo = ?',array($_POST['pseudo']));
if (count($pseudoExist) != 0) {
	array_push($erreur, 'pseudo');
}

if (!empty($erreur)) {
	echo json_encode($erreur);
}
?>
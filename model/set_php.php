<?php 
require_once('class.dbconnect.php');
require_once('class.req.php');
require_once('class.insc.php');
require_once('class.PayPal.php');

$dbconnexion = new Dbconnect();
$ReqDb = new ReqDb($dbconnexion);
$ReqInsc = new ReqInsc($dbconnexion);
$ReqPayPal = new ReqPayPal($dbconnexion);
?>
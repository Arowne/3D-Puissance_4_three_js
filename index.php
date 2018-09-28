<?php 
	if (isset($_GET['page']) && $_GET['page'] == 'game') {
		require_once('model/set_php.php');
		require_once('game.php');
	}
	if (isset($_GET['page']) && $_GET['page'] == 'acceuil') {
		require_once('model/set_php.php');
		require_once('acceuil.php');
	}
	if (isset($_GET['page']) && $_GET['page'] == 'insc') {
		require_once('model/set_php.php');
		require_once('inscription.php');
	}
	if (isset($_GET['page']) && $_GET['page'] == 'account') {
    	require_once('model/set_php.php');
		require_once('account.php');
	}
	if (isset($_GET['page']) && $_GET['page'] == 'offers') {
    	require_once('model/set_php.php');
		require_once('credits.php');
	}
?>
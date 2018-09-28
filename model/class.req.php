<?php 
	class Reqdb
	{
		protected $dbconnexion;
		function __construct($dbconnexion)
		{
			$this->dbconnexion = $dbconnexion;
		}
		public function connexion(){
			if (isset($_POST['mail']) && isset($_POST['mdp']) && !empty($_POST['mail']) && !empty($_POST['mdp'])) {
				$countInfo = $this->dbconnexion->reqDbObj('SELECT * FROM inscrit WHERE mail = ? AND mdp = ?', array($_POST['mail'],sha1($_POST['mdp'])));
				if (count($countInfo) == 1) {
					$_SESSION['id_membre'] = $countInfo[0]->id;;
					?><script>window.location = 'index.php?page=account'</script><?php
				}
			}
		}

		/* ACCOUNT */
		public function getUser(){
			$user = $this->dbconnexion->reqDbObj('SELECT * FROM inscrit WHERE id = ? ', array($_SESSION['id_membre']));
			return $user;
		}

		/*GAME*/
		public function setCredits(){
			$user = $this->dbconnexion->reqDbExec('UPDATE inscrit SET credit = credit-1 WHERE id = ?');
			$user->execute(array($_SESSION['id_membre']));
		}

		/*OFFERS*/
		public function getOffers(){
			$offers = $this->dbconnexion->reqDbObj('SELECT * FROM offres');
			return $offers;
		}
		/*PAYMENR*/
		public function existOffers(){
			$offers = $this->dbconnexion->reqDbObj('SELECT * FROM offres WHERE id = ?',array($_GET['o']));
			if (count($offers) != 1) {
				?><script>window.location = 'index.php?page=offers'</script><?php
			}
			else{
				return $offers;
			}
		}
	}
?>
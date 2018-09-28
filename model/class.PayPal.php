<?php 
	class ReqPayPal extends ReqDb
	{
		private $offer;
		private $profil;

		public function getOffer($id_offers){
			$offerExist = $this->dbconnexion->reqDbObj('SELECT * FROM offres WHERE id = ?', array($id_offers));
			$this->offer = $offerExist;
		}

		public function getProfil($id_membre){
			$profilExist = $this->dbconnexion->reqDbObj('SELECT * FROM inscrit WHERE id = ?', array($id_membre));
			$this->profil = $profilExist;
		}

		public function setCredit(array $info){
			$this->getOffer($info[0]);
			$this->getProfil($info[1]);

			if (count($this->offer) == 1 && count($this->profil) == 1) {
				$insert = $this->dbconnexion->ReqDbExec('UPDATE inscrit SET credit = credit+ ? WHERE id = ?');
				$insert->execute(array($this->offer[0]->credits, $this->profil[0]->id));
				header('Location: index.php?page=account');
				setcookie('payment','completed',time()+3600,"/");
			}
			else{
				header('Location: index.php?page=account');
				setcookie('payment','uncompleted',time()+3600,"/");
			}
		}
	}
?>
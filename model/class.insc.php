<?php
 class ReqInsc extends Reqdb
 {
 	private $verif = true;

 	public function securisation($données){
		$données=trim($données);
		$données=strip_tags($données);
		$données=stripslashes($données);
		return $données;
	}

 	public function verifInfo($post) {
 		$regPseudo = "/[a-zA-Z0-9-]+/";

 		if (empty($post['pseudo']) && strlen($post['pseudo'])> 50 && strlen($post['pseudo']) < 5 && !preg_match($regPseudo,$post['pseudo']))  {
 			$this->verif = false;
 		}
 		$mailExist = $this->dbconnexion->reqDbObj('SELECT * FROM inscrit WHERE mail = ?', array($post['mail']));
 		if (empty($post['mail']) || count($mailExist) != 0) {
 			$this->verif = false;
 		}
 		if (empty($post['mdp']) && $post['mdp'] != $post['confmdp']) {
 			$this->verif = false;
 		}
 	}

 	public function addValues($post) {
 		if ($this->verif == true ) {
 			$insert = $this->dbconnexion->reqDbExec('INSERT INTO inscrit(pseudo,mail,mdp,credit) VALUES(?,?,?,30)');
 			$insert->execute(array($post['pseudo'], $post['mail'], sha1($post['mdp'])));
 		   ?><script type="text/javascript">window.location='index.php?page=acceuil'</script> <?php
 		}
 	}

 	public function inscription() {
 		if (isset($_POST['pseudo']) && isset($_POST['mail']) && isset($_POST['confmdp']) && isset($_POST['mdp'])) {
 				$post = [
 					'pseudo' =>$this->securisation($_POST['pseudo']),
 					'mail' =>$this->securisation($_POST['mail']),
 					'mdp' =>$_POST['mdp'],
 					'confmdp' =>$_POST['confmdp']
 				];

 				$this->verifInfo($post);
 				$this->addValues($post);
 		}
 	}

 }
?>

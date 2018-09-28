<?php
require_once('model/set_php.php');
$ReqDb->connexion();
?>
<!DOCTYPE html>
<html>
<head>
	<title>PUISSANCE 4</title>
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet">
	<link rel="stylesheet" href="style/acceuil.css">
</head>
<body class="body">
	<div class="acceuil-container">
		<div class="title">
			<h3>Puissance <span id="t-anim">4</span></h3>
		</div>
		<div class="img-p4-container">
			<img src="img/transparentP4.png" class="img-p4">
		</div>
		<div class="btn-container">
			<button class="btn btn-outline-success btn-play">JOUER</button>
		</div>
	</div>
	<div class="connexion-container">
		<h1>CONNEXION</h1>
		  <form method="post" action="acceuil.php">
            <!-- Nom d'utilisateur -->
            <div class="form-group">
              <label for="username" class="title-cnx">Nom d'utilisateur</label>
              <input type="text" class="form-control cnx-input" id="username" name="mail" placeholder="adresse email..." required>
            </div>

            <!-- Mots de passe -->
            <div class="form-group">
              <label for="password" class="title-cnx">Mots de passe</label>
              <input type="password" class="form-control cnx-input" id="password" name="mdp" placeholder="mots de passe ..." required>
               <button class="btn btn-primary btn-cnx btn-lg" id="btn-cnx">Connexion</button>
            </div>
            <!-- inscription/forget mots de passe -->
            <div class="insc-forg">
              <span><a href="index.php?page=insc" class="cnx-link">Inscription </a></span>|<span><a href="forget-password.php" class="cnx-link"> Mots de passe oublié ?</a></span><br>
            </div>
        </form>
	</div>
	<script type="text/javascript" src="nuage.js"></script>
</body>
</html>

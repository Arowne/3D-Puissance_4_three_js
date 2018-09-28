<?php 
$ReqInsc->inscription();
?>
<!DOCTYPE>
<html>
<head>
	<title>PUISSANCE 4</title>
	<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
    crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">   
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet">
	<link rel="stylesheet" href="style/acceuil.css">
	<link rel="stylesheet" href="style/insc1.css">
</head>
<body class="body">
	<div class="insc-container">
		<div class="insc-header">
			<h3>PUISSANCE 4<h3>
		</div>
		<div class="container-form">
			<form  method="post" action="index.php?page=insc" id="form">
				<div class="form-group">
		       		<span class="form-control alert alert-danger" id="err-mess"></span><br>
		            <label for="username" class="title-cnx">Pseudo :</label>
		            <input type="text" class="form-control cnx-input"  name="pseudo" placeholder="Pseudo..." required>
		        </div>
		       	<div class="form-group">
		       		<span class="form-control alert alert-danger" id="err-mess"></span><br>
		            <label for="username" class="title-cnx">Email :</label>
		            <input type="text" class="form-control cnx-input" name="mail" placeholder="Email..." required>
		        </div>
		        <div class="form-group">
		       		<span class="form-control alert alert-danger" id="err-mess"></span><br>
		            <label for="username" class="title-cnx">Mots de passe :</label>
		            <input type="password" class="form-control cnx-input" name="mdp" placeholder="Mots de passe..." required>
		        </div>
		       	<div class="form-group">
		       		<span class="form-control alert alert-danger" id="err-mess"></span><br>
		            <label for="username" class="title-cnx">Confirmation de mots de passe :</label>
		            <input type="password" class="form-control cnx-input" name="confmdp" placeholder="Confirmer mots de passe..." required>
		        </div>
		        <button class="btn btn-outline-success btn-play">S'INSCRIRE</button>
	        </form>
    	</div>
	</div>
	<script type="text/javascript" src="insc.js"></script>
</body>
</html>
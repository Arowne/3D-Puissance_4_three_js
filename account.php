<?php
    if (!isset($_SESSION['id_membre'])) {
        ?><script type="text/javascript">window.location = 'index.php?page=acceuil'</script><?php
    }
    $user = $ReqDb->getUser();
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
    <link rel="stylesheet" href="style/acceuil2.css">
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
</head>
<body class="body">
	<div class="account-container">
    <div class="head-account">
		  <h1><?= $user[0]->pseudo?>     <a href="deconnexion.php"><i class="fas fa-sign-out-alt"></i></a></h1>
    </div>
    <div class="credits">
        <h1><a href="index.php?page=offers" style="text-decoration: unset; color: black"><?= $user[0]->credit ?><i class="fab fa-product-hunt"></i></a></h1>
    </div>
    <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6">
        <label>Player 1</label><br>
        <select name="p1_color" class="p-color">
          <option value="">Color</option>
          <option id="red" value="red">rouge</option>
          <option id="yellow" value="yellow">jaune</option>
          <option id="green" value="green">vert</option>
          <option id="blue" value="blue">bleu</option>
        </select>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6">
        <label>Player 2</label><br>
        <select name="p2_color" class="p-color">
          <option value="">Color</option>
          <option id="red" value="red">rouge</option>
          <option id="yellow" value="yellow">jaune</option>
          <option id="green" value="green">vert</option>
          <option id="blue" value="blue">bleu</option>
        </select>
      </div>
      <?php if ($user[0]->credit > 0) :?>
        <div class="btn-holder">
            <button class="btn btn-outline-success btn-play2">C'est partie !</button>
        </div>
      <?php endif ?>
      <?php if ($user[0]->credit <= 0) :?>
        <div class="btn-holder">
          <a href="index.php?page=offers">
            <button class="btn btn-outline-success btn-play2">C'est partie !</button>
          </a>
        </div>
      <?php endif ?>
    </div>
	</div>
  <script type="text/javascript" src="nuage.js"></script>
	<script type="text/javascript" src="js/account.js"></script>
</body>
</html>

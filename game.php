<!DOCTYPE html>
<html>
	<head>
		<title>Puissance 4</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
		<link rel="stylesheet" href="style/style2.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
		<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://rawgit.com/mrdoob/three.js/master/build/three.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
		<script src="https://rawgit.com/mrdoob/three.js/master/examples/js/renderers/CSS3DRenderer.js"></script>
		<script src="js/three-font.js"></script>
		<script src="js/setting.js"></script>
		<script src="js/plateau.js"></script>
	</head>
	<body>
    <input type="hidden" value="<?=$user[0]->credit-1?>" id="credit">
		<audio id="myAudio">
			  <source src="audio/pion.mp3" type="audio/mpeg">
		</audio>
		<audio id="audioReturn">
				<source src="audio/trans1.mp3" type="audio/mpeg">
		</audio>
		<audio id="gameSound">
				<source src="audio/gameAudio.mp3" type="audio/mpeg">
		</audio>
		<audio id="win">
				<source src="audio/win.mp3" type="audio/mpeg">
		</audio>
		<canvas id='canvas'></canvas>


		<script src="js/init.js"></script>
</body>
</html>

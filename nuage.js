var countN = 5;
var n = document.querySelector('.nuage-img');

for (var i = 0; i <9 ; i++) {
	if (i == 0) {$('body').prepend('<div class="nuage"></div>');}
	if (i%2 != 0) {
		$('.nuage').prepend('<img src="./img/nuage.png" class="nuage-img" style="position:absolute;margin-left:'+i*300+'px;margin-top:'+50+'px">');
	}
	else{
		$('.nuage').prepend('<img src="./img/nuage.png" class="nuage-img" style="position:absolute;margin-left:'+i*300+'px;">');
		$('.nuage').animate({marginLeft:'+='+100+'px'},5000);
		setInterval(function(){
			$('.nuage').animate({marginLeft:'-='+100+'px'},5000);
		},1000);
	}
}

$('.connexion-container').hide();
$('.btn-play').click(function(){
	$('.acceuil-container').fadeOut('500');
	setInterval(function(){
		$('.connexion-container').fadeIn('2000');
	},500);
});

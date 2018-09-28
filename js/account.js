$('.btn-play2').click(function(e){
	if ($('.p-color')[0].value == '' || $('.p-color')[1].value == '') {
		e.preventDefault();
		alert('Veuillez choisir la couleur des deux jouers');
	}
	else if ($('.p-color')[0].value == $('.p-color')[1].value) {
		e.preventDefault();
		alert('Veuillez choisir des couleur differentes');
	}
	else if ($('.p-color')[0].value != 'red' && $('.p-color')[0].value != 'green' && $('.p-color')[0].value != 'yellow' && $('.p-color')[0].value != 'blue') {
		e.preventDefault();
		alert('Veuillez choisir une couleur valide');
	}
	else{
		document.cookie = 'p1='+$('.p-color')[0].value;
		document.cookie = 'p2='+$('.p-color')[1].value;
		window.location = 'index.php?page=game';
	}
});

function payment(){
	if ($.cookie('payment') == "completed") {
		$('body').prepend('<div class="payment container-fluid alert-success">Votre paiement a bien était pris en compte</div>');
		$('.payment').css('height', '150px');
		$('.payment').css('position', 'absolute');
		$('.payment').css('z-index', '1000');
		$('.payment').css('text-align', 'center');
		$('.payment').css('font-size', '50px');
		$(".alert-success").hide();
		$(".alert-success").slideDown(700);
		setTimeout(function(){
			$(".alert-success").slideUp(700);
		},2000);
	}
	else if ($.cookie('payment') == "uncompleted") {
		$('body').prepend('<div class="payment container-fluid alert-danger">Votre paiement n\' a pas pu etre effectuer veuiller réesayer ultérieurement</div>');
		$('.payment').css('height', '150px');
		$('.payment').css('position', 'absolute');
		$('.payment').css('z-index', '1000');
		$('.payment').css('text-align', 'center');
		$('.payment').css('font-size', '20px');
		$(".alert-danger").hide();
		$(".alert-danger").slideDown(700);
		setTimeout(function(){
			$(".alert-danger").slideUp(700);
		},2000);
	}
}
payment();
$.removeCookie('payment');
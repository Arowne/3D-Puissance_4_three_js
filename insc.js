var v = document.querySelectorAll('input');
var s = document.querySelectorAll('span');
var b = document.querySelector('#submit');

var regPseudo = /^[a-zA-ZàâæçéèêëîïôœùûüÿÀÂÆÇÉÈÊËÎÏÔŒÙÛÜŸ\s-'_0-9]+$/;
var regMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function pseudo(e){
	if (regPseudo.test(v[0].value) == false || v[0].value == '') {
		e.preventDefault();
		s[0].style.display = 'block';
		s[0].innerHTML = "Veuillez entrer un pseudo valide.(caracteres speciaux valide: -_')";
	}
	else{
		s[0].style.display = 'none';
	}
}

function mail(e){
	if (regMail.test(v[1].value) == false) {
		e.preventDefault();
		s[1].style.display = 'block';
		s[1].innerHTML = 'Veuillez entrer un mail valide au format exemple@exemple.fr';
	}
	else{
		s[1].style.display = 'none';
	}
}

function mdp(e){
	if (v[2].value == '') {
		e.preventDefault();
		s[2].style.display = 'block';
		s[2].innerHTML = '';
	}
	else{
		s[2].style.display = 'none';
	}
}

function confmdp(e){
	if (v[2].value != v[3].value) {
		e.preventDefault();
		s[3].style.display = 'block';
		s[3].innerHTML = '';
	}
	else{
		s[3].style.display = 'none';
	}
}


$('button').click(function(e){
	e.preventDefault();
	var mail = $('#form').find("input[name='mail']").val();
	var pseudo = $('#form').find("input[name='pseudo']").val();
	$.post('ajax.info.php',{mail: mail,pseudo: pseudo},function(data){
		if (data == '') {
			$('#form').submit();
		}
		else{
			var obj = jQuery.parseJSON(data);

			for (var key in obj) {
				if (obj[key] == 'pseudo') {
					s[0].style.display = 'block';
					s[0].innerHTML = "<center>*Ce pseudo est deja pris par un autre utilisateur</center>";
				}
				if (obj[key] == 'mail') {
					s[1].style.display = 'block';
					s[1].innerHTML = "<center>*Ce mail est deja pris par un autre utilisateur</center>";
				}
			}
		}
	});
});

var f = [pseudo,mail,mdp,confmdp];
for (var i = 0 ; i < v.length ; i++) {
	v[i].addEventListener('blur',f[i]);
}

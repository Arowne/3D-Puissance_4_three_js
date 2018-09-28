	// Boutton caroussel //
	var btnCaroussel= document.querySelectorAll('.button-carrousel');

	// index slide show//
	var slideIndex=1;
	showSlide(slideIndex);

	// Fonction control slide par boutton
	function plusSlides(n){
		showSlide(slideIndex += n);
	}

	// Function controle slide par pagination
	function currentSlide(n){
		showSlide(slideIndex = n);
	}

	// Function slide image
	function showSlide(n){
		var i;
		var slides = document.querySelectorAll('.mySlides');

		if (n > slides.length) { slideIndex = 1}
		if (n < 1) { slideIndex = slides.length}

		// effacement des balises active de la pagination (point rouge);
		for (var i = 0; i < slides.length; i++) {
			slides[i].style.display="none";
		}


		slides[slideIndex-1].style.display="block";

	}


	// Bouton on clique //
	btnCaroussel[0].addEventListener('click',function(){
		plusSlides(-1);
	});
	btnCaroussel[1].addEventListener('click',function(){
		plusSlides(1);
	});
var achat  = document.querySelectorAll('.achat');

for (var i = 0; i < achat.length; i++) {
	achat[i].addEventListener('click',function(){
		window.open('payment.php?o='+this.value,'buy',"width=750,height=750");
	});
}
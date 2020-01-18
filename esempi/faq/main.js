// Creare una piccola sezione FAQ. Tante domande che quando cliccate visualizzano la risposta corrispondente.

$(document).ready(function() {
	$('.question').click(function() {
		//Far vedere diversi modi di fare la stessa cosa.
		$(this).children('p').toggle();
		$(this).find('p').toggle();
	});
});
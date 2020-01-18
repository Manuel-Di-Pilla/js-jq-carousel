// Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante ma utilizzare toggle per la sua visualizzazione.

//Versione con toggle
$(document).ready(function(){
  $('#bottone').click(
    function(){
      $('p').toggle();
    }
  );
});

//Versione manuale
$(document).ready(function(){
  var visible = false;
  $('#bottone').click(
    function(){
      if (visible == true) {
        $('p').hide();
        visible = false;
      } else {
        $('p').show();
        visible = true;
      }
    }
  );
});

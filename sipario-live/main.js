// Ricreare un titolo di un paragrafo che cliccato mostra il testo sottostante ma utilizzare toggle per la sua visualizzazione.
$(document).ready(
  function() {
    $('#bottone').click(
      function() {
        $('#sipario').slideToggle();
      }
    );
  }
);

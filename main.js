$(document).ready(function() {


  $('form').on('submit', function(e) {
    e.preventDefault();

    const endereconova = $('#enderecotrf').val();
    const novoItem = $('<li></li>');
    
  $('span').click(function() {
    $(this).css({"text-decoration":"line-through"});
  })

    $(`<span>${endereconova}<span/>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    
    $('#enderecotrf').val('')

  })
  })

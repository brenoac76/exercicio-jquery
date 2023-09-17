$('form').on('submit', function(e) {
    e.preventDefault();
    const nomeTarefa = $('#campo-tarefa').val();
    const novoItem = $('<li></li>');
    $(`<li>${nomeTarefa}</li>`).appendTo(novoItem);
    $(novoItem).appendTo('ul');
    $('ul').slideDown();
    $('#campo-tarefa').val('');
        
})

$('ul').on('click', function(e) {
    $('li').click(() => $(event.target).css('text-decoration', 'line-through'))
})

$('ul').on('dblclick', function(e) {
    $('li').click(() => $(event.target).css('text-decoration', 'none'))
})
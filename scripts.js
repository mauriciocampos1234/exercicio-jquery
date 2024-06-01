$(document).ready(function() {
    $('#form-tarefa').on('submit', function(event) {
        event.preventDefault();

        const tarefaNome = $('#tarefa-nome').val();
        const novaTarefa = $('<li>' + tarefaNome + '</li>');

        novaTarefa.on('click', function() {
            $(this).toggleClass('completed');
        });

        $('#lista-tarefas').append(novaTarefa);

        $('#tarefa-nome').val('');
    });
});
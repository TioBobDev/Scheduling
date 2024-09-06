$(document).ready(() => {
    //tooltips bootstrap da tabela com os resultados
    $('[data-bs-toggle="tooltip"]').tooltip();

    //activate select2 for html select element
    $(".select2").select2();

    //máscaras com Jquery Input Mask
    $(".telefone").mask("(00) 0000-0000");
    $(".whatsapp").mask("(00) 00000-0000");
    $(".cpf").mask("000.000.000-00", { reverse: true });
    $(".money").mask("000.000.000.000.000,00", { reverse: true });
    $(".cnes").mask("#000000");
    $(".percentual").mask("#00");
    $(".serviceDuration").mask("#0");
    $(".date").mask("00/00/0000");

    //configurações do DataTables
    $(".dt-customize").DataTable({
        responsive: true,
        autoWidth: true,
        lengthChange: true,
        lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "Todos"],
        ],
        oLanguage: {
            sEmptyTable: "Nenhum registro encontrado",
            sInfo: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            sInfoEmpty: "Mostrando 0 até 0 de 0 registros",
            sInfoFiltered: "(Filtrados de _MAX_ registros)",
            sInfoThousands: ".",
            sLengthMenu: "_MENU_ resultados por página",
            sLoadingRecords: "Carregando ...",
            sProcessing: "Processando ...",
            sZeroRecords: "Nenhum registro encontrado",
            sSearch: "Pesquisar",
            oPaginate: {
                sNext: "Próximo",
                sPrevious: "Anterior",
                sFirst: "Primeiro",
                sLast: "Último",
            },
            oAria: {
                sSortAscending: ": Ordenar colunas de forma ascendente",
                sSortDescending: ": Ordenar colunas de forma descendente",
            },
            select: {
                linhas: {
                    _: "Selecionado% d linhas",
                    0: "Nenhuma linha avançada",
                    1: "Selecionado 1 linha",
                },
            },
            botões: {
                copy: "Copiar para a área de transferência",
                copyTitle: "Cópia bem local",
                copySuccess: {
                    1: "Uma linha copiada com sucesso",
                    _: "% d linhas copiadas com sucesso",
                },
            },
        },
    });

    //keep input capitalized
    $("input[type=text], textarea").on("keyup", (e) => {
        e.target.value = e.target.value.toUpperCase();
    });

    /**
     * loader
     */
    $(".loading").on("click", () => {
        $("body").removeClass(".preloader");
        $("#loader").addClass("exibir").removeClass("ocultar");
    });

    $("form").on("submit", (e) => {
        if (!e.target.attributes.id) {
            $("body").removeClass(".preloader");
            $("#loader").addClass("exibir").removeClass("ocultar");
        }
    }); //end loader
}); //end document
/* Realizar un archivo js que sea capaz de mostrar las localidades correspondientes
a la provincia elegida en el primer combo. Refrescar el combo de localidades mediante
AJAX a medida que cambie el valor del primero */

$(document).ready(function () {
    var select = $('#provincias');
    getDataUrl(select.val());
    $('#provincias').change(function () {
        getDataUrl(select.val());
    });
});

function getDataUrl(value) {
    $.ajax({
        data: {id: value},
        type: 'GET',
        url: 'http://sitelicon.eu/test/ajax_localidades.php',
        async: true,
        dataType: 'html',
    });
}
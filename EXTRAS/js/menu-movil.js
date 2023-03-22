$(document).ready(function(){
    $('#menu-hamburguesa').on('click', function() {
        if ($('ul#opciones').is(':hidden')) {
           $('ul#opciones').show();
           $('#hamburguesa').removeClass('down');
           $('#hamburguesa').addClass('up');
        }
        else {
            $('ul#opciones').hide();
            $('#hamburguesa').removeClass('up');
            $('#hamburguesa').addClass('down');
        }       
    });
    
    $('#hamburguesa').on('click', function() {
        if ($(this).hasClass('down')) {
           $('ul#opciones').show();
           $(this).removeClass('down');
           $(this).addClass('up');
        }
        else {
            $('ul#opciones').hide();
            $(this).removeClass('up');
            $(this).addClass('down');
        }       
    });

    $('#opciones li a').on('click', function() {
        var value = $(this).text();
        $('#menu-hamburguesa').text(value);
        $('ul#opciones').hide();
    });
});
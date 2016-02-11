$(document).ready(function(){
    $(".botonRuteo").click(function(){
    	$("#contRuteo").slideToggle("slow");
    	$("#contHome").css({ display: 'none' });
    	$("#contPuntos").css({ display: 'none' });
    	$("#contDibujar").css({ display: 'none' });
    });
    $("#contRuteo").css({ display: 'none' });

    $(".botonHome").click(function(){
    	$("#contHome").slideToggle("slow");
    	$("#contRuteo").css({ display: 'none' });
    	$("#contPuntos").css({ display: 'none' });
    	$("#contDibujar").css({ display: 'none' });
    });
    $("#contHome").css({ display: 'none' });

    $(".botonPuntos").click(function(){
    	$("#contPuntos").slideToggle("slow");
    	$("#contRuteo").css({ display: 'none' });
    	$("#contHome").css({ display: 'none' });
    	$("#contDibujar").css({ display: 'none' });
    });
    $("#contPuntos").css({ display: 'none' });

    $(".botonDibujar").click(function(){
    	$("#contDibujar").slideToggle("slow");
    	$("#contRuteo").css({ display: 'none' });
    	$("#contHome").css({ display: 'none' });
    	$("#contPuntos").css({ display: 'none' });
    });
    $("#contDibujar").css({ display: 'none' });


    $('.nav li a').click(function(e) {
        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});
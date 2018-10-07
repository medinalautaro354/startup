$(document).ready(function(){

	//scroll elementos menu
	var precios = $('#precios').offset().top,
		contacto = $('#contacto').offset().top,
		caracteristicas = $('#caracteristicas').offset().top;


	if($(window).width() > 800){
		$('#btn-precios').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: precios 
			},500);
		});
	}

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto 
		},500);
	});

	$('#btn-caracteristicas').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: caracteristicas
		},500);
	});

	if($(window).width() < 768){
		$('#btn-precios').on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: precios + 70
			},500);
		});
	}


	
		

});


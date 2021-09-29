$(document).ready(function() {


			$('#header').hide();

			$('.fa-bars').click(function(event) {
				$('#header').show('slow').css('transition', 'all .3s');
			});
			$('.nav-item >.nav-link,.close-btn').click(function(event) {
				$('#header').hide('slow').css('transition', 'all .3s');
			});

			// $('.fa-bars').click(function(event) {

			// 	$('#header').slideDown('slide');
			// });

			// $('.close-btn').click(function(event) {

			// 	$('#header').slideUp('slide');
			// });

			// $('.fa-bars').click(function(event) {

			// 	$('#header').fadeIn('slow');
			// });

			// $('.close-btn').click(function(event) {

			// 	$('#header').fadeOut('slow');
			// });
});
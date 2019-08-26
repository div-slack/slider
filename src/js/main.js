//= ../../node_modules/fullpage.js/dist/fullpage.js
//= ../../node_modules/jquery/dist/jquery.js

new fullpage('#fullpage', {
    navigation: true,
    responsiveWidth: 700,
    anchors: ['first', 'second', '3'],
    parallax: true,
    onLeave: function(origin, destination, direction) {
	if (destination.isLast) {
	$(".img-next").fadeOut('slow/400/fast', function() {
	});
	}
	else {
		$(".img-next").fadeIn('slow/400/fast', function() {
	});
	}
},
});

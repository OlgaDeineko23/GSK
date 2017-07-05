$(document).ready(function() {

	/* Center on screen */

	var centerX = $(window).width() / 2;
	var centerY = $(window).height() / 2;

	$(window).on('resize', function() {
		centerX = $(window).width() / 2;
		centerY = $(window).height() / 2;
	});

	function Virus() {
		this.x = Math.round(Math.random() * $(window).width());
		this.y = Math.round(Math.random() * $(window).height());
		this.speed = 0;
	}

	setInterval(function() {
		var virus = new Virus();
		var html = '<li class="virus" style="position: absolute; width: 140px; left:' + virus.x + 'px; top:' + virus.y + 'px; z-index: 200;"><img src="assets/images/virus.svg" alt="Virus"></li></li>';
		$('#viruses').append(html);
	}, 3000);

	$('#viruses').click(function(event) {
		event.target.parentNode.remove();
	});

});

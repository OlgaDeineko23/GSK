$(document).ready(function() {

	function Virus() {
		this.x = Math.round(Math.random() * $(window).width());
		this.y = Math.round(Math.random() * $(window).height());
		this.speed = 0;
	}

function center() {
	var x = $(window).width() / 2;
	var y = $(window).height() / 2;
	console.log(x, y);
}

var center();
$(window).on('resize', function() {
	center();
});

	setInterval(function() {
		var virus = new Virus();
		var html = '<li class="virus" style="position: absolute; width: 140px; left:' + virus.x + 'px; top:' + virus.y + 'px; z-index: 200;"><img src="assets/images/virus.svg" alt="Virus"></li></li>';
		$('#viruses').append(html);
	}, 3000);

$('#viruses').click(function(event) {
	event.target.parentNode.remove();
});

});

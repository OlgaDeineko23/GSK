$(document).ready(function() {

	/* Center on screen */

	var centerX = Math.round($('.taddy').offset().left + $('.taddy').width() / 2);
	var centerY = Math.round($('.taddy').offset().top + $('.taddy').height() / 2);

	$(window).on('resize', function() {
		centerX = Math.round($('.taddy').offset().left + $('.taddy').width() / 2);
		centerY = Math.round($('.taddy').offset().top + $('.taddy').height() / 2);
	});

	function Virus(x, y) {
		this.x = x;
		this.y = y;
	}

	var virusType = 0;

	setInterval(function() {
		virusType++;
		if (virusType % 2 > 0) {
			var x = Math.round(Math.random() * $('body').width());
			if (Math.round(Math.random()) > 0) {
				var virus = new Virus(x, $('body').height());
			} else {
				var virus = new Virus(x, 0);
			}
		} else {
			var y = Math.round(Math.random() * $('body').height());
			var virus = new Virus(0, y);
			if (Math.round(Math.random()) > 0) {
				var virus = new Virus($('body').width(), y);
			} else {
				var virus = new Virus(0, y);
			}
		}
		var html = '<li class="virus" style="position: absolute; width: 5%; left:' + virus.x + 'px; top:' + virus.y + 'px; z-index: 200;"><img src="assets/images/virus.svg" alt="Virus"></li></li>';
		$('#viruses').append(html);
	}, 2000);

	var headStartX = $('.taddy__head').offset().left;
	var headEndX = $('.taddy__head').offset().left + $('.taddy__head').width();
	var headStartY = $('.taddy__head').offset().top;
	var headEndY = $('.taddy__head').offset().top + $('.taddy__head').height();

	function HitBox(obj) {
		this.startX = $(obj).offset().left;
		this.endX = $(obj).offset().left + $(obj).width();
		this.startY = $(obj).offset().top;
		this.endY = $(obj).offset().top + $(obj).height();
	};

	var head = new HitBox('.taddy__head');
	var body = new HitBox('.taddy__body') ;
	var legs = new HitBox('.taddy__legs');

	setInterval(function() {
		$('.virus').each(function(index, el) {
			var left = $(el).offset().left;
			var top = $(el).offset().top;
			if (left < centerX) {
				left = left + 1;
				$(el).css('left', left + 'px');
			} else {
				left = left - 1;
				$(el).css('left', left + 'px')
			}
			if (top < centerY) {
				top = top + 1;
				$(el).css('top', top + 'px')
			} else {
				top = top - 1;
				$(el).css('top', top + 'px');
			}
			if (left > head.startX && left < head.endX && top > head.startY && top < head.endY || left > body.startX && left < body.endX && top > body.startY && top < body.endY || left > legs.startX && left < legs.endX && top > legs.startY && top < legs.endY) {
				$('.life__list .life__full').last().addClass('life__lost').removeClass('life__full');
				$('.taddy').addClass('taddy_action');
				setTimeout(function () {
					$('.taddy').removeClass('taddy_action');
				}, 600);
				$(el).remove();
			}
/*		if ($('.life__list .life__full').length == 0) {
			$('button').trigger('click');
		}*/
	});
	}, 10);

	/* Hit bear */

	/* Game events*/

	var score = 0;

	$('#viruses').click(function(event) {
		if (event.target.tagName == 'IMG') {
			event.target.parentNode.remove();
			score++;
			$('#total-score').text(score);
		}
	});
});

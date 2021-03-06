import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  moduleId : module.id,
  selector: 'app-ochran-macika-game',
  templateUrl: './ochran-macika-game.component.html',
  styleUrls: ['./ochran-macika-game.component.scss']
})
export class OchranMacikaGameComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    /* Game config */

    var maxSpeed = 4500;
    var minSpeed =  3000;
    var timeCreat = 870;
    var animateSpeed = 20;

    var centerX = Math.round(($('.taddy').offset().left - $('.game').offset().left) + $('.taddy').width() / 2);
    var centerY = Math.round($('.taddy').position().top + $('.taddy').height() / 2);

    $(window).on('resize', function() {
      centerX = Math.round(($('.taddy').offset().left - $('.game').offset().left) + $('.taddy').width() / 2);
      centerY = Math.round($('.taddy').position().top + $('.taddy').height() / 2);
    });

    function randomInteger(min, max) {
      var rand = min - 0.5 + Math.random() * (max - min + 1)
      rand = Math.round(rand);
      return rand;
    }

    function Virus(x, y, url, size) {
      this.x = x;
      this.y = y;
      this.url = url;
      this.size = size;
    }

    function HitBox(obj) {
      this.startX = $(obj).offset().left - $('.game').offset().left;
      this.endX = ($(obj).offset().left - $('.game').offset().left) + $(obj).width();
      this.startY = $(obj).offset().top - $('.game').offset().top;
      this.endY = ($(obj).offset().top - $('.game').offset().top) + $(obj).height();
    };

    var head = new HitBox('.taddy__head');
    var body = new HitBox('.taddy__body') ;
    var legs = new HitBox('.taddy__legs');

    var virusType = 0;

    var create = setInterval(function() {
      virusType++;
      var randomImage: any = 'assets/images/virus' + randomInteger(1, 6) + '.svg';
      var randomSize: any = randomInteger(18, 26) + '%';
      if (virusType % 2 > 0) {
        var x = Math.round(Math.random() * $('.game').width());
        if (Math.round(Math.random()) > 0) {
          var virus = new Virus(x, $('.game').height(), randomImage, randomSize);
        } else {
          var virus = new Virus(x, 0, randomImage, randomSize);
        }
      } else {
        var y = Math.round(Math.random() * $('.game').height());
        var virus = new Virus(0, y, randomImage, randomSize);
        if (Math.round(Math.random()) > 0) {
          var virus = new Virus($('.game').width(), y, randomImage, randomSize);
        } else {
          var virus = new Virus(0, y, randomImage, randomSize);
        }
      }
      var html = '<li class="virus" style="text-align: center; position: absolute; width: ' + virus.size + '; left:' + virus.x + 'px; top:' + virus.y + 'px; z-index: 200;"><img style="width: 70%; padding: 15% 0;" src="' + virus.url + '" alt="Virus"></li></li>';
      $('#viruses').append(html);
      var element = $('#viruses').find('li:last-child');
      var randomSpeed = randomInteger(minSpeed, maxSpeed);
      $(element).animate({
        top: centerY,
        left: centerX
      }, randomSpeed, 'linear');
    }, timeCreat);

    var move = setInterval(function() {
      $('.virus').each(function(index, el) {
        var left = $(el).position().left;
        var top = $(el).position().top;

        if (left > head.startX && left < head.endX && top > head.startY && top < head.endY || left > body.startX && left < body.endX && top > body.startY && top < body.endY || left > legs.startX && left < legs.endX && top > legs.startY && top < legs.endY) {
          $('.life__list .life__full').last().addClass('life__lost').removeClass('life__full');
          $('.taddy').addClass('taddy_action');
          setTimeout(function () {
            $('.taddy').removeClass('taddy_action');
          }, 600);
          $(el).remove();
        }

        if ($('.life__list .life__full').length == 0) {
          clearInterval(create);
          clearInterval(move);
          $('.finish-game').trigger('click');
          setTimeout(function() {
            $('#total-viruses').text(score);
          }, 150);
        }
      });
    }, animateSpeed);

    /* Game events*/

    var score = 0;

    $('#viruses').click(function(event) {
      if (event.target.tagName == 'IMG') {
        $(event.target.parentNode).stop();
        var boom = '<img class="virus__boom" src="assets/images/boom.svg" alt="Boom" style="position: absolute; left: 50%; transform: translate(-50%, -50%); top: 50%; width: 150%;" />';
        $(event.target.parentNode).append(boom);
        setTimeout(function() {
          event.target.parentNode.remove();
        }, 200)
        score++;
        $('#total-score').text(score);
      }
    });

  }

}

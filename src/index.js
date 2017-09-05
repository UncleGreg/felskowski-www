import css from './index.styl';
import $ from 'jquery';

(function () {
  $('.nav-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.page-menu').toggleClass('menu-opened');
  })
})();

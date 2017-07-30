import css from './index.styl';
import $ from 'jquery';
import 'fullpage.js';

$(document).ready(function() {
   $('#fullpage').fullpage();
});

(function () {
  $('.nav-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.page-menu').toggleClass('menu-opened');
  })
})();

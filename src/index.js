import css from './index.styl';
import $ from 'jquery';
import 'fullpage.js';

$(document).ready(function() {
   $('#fullpage').fullpage({
     anchors:['home', 'about', 'services', 'contact'],
   });
});

(function () {
  $('.nav-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('.page-menu').toggleClass('menu-opened');
  })
})();

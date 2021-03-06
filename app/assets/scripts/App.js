// BABEL & WEBPACK WILL TAKE CARE OF EVERYTHING, ES5 away.

import $ from 'jquery';
import Carousel from './modules/Carousel';
import BurgerToggle from './modules/toggleMenu';
import StickyNav from './modules/StickyNav';
import lightbox from './modules/lightbox';
import smoothScroll from "jquery-smooth-scroll";

var stickyNav = new StickyNav("#nav-wrapper", ".nav", "stickyNav");
stickyNav.attach();

var toggleMenu = new BurgerToggle();

// This if statement is to run for index.html only
if($("body").data("pages") === "indexPage") {
  // START CAROUSEL ==============================================================
  var slides = new Carousel("siteSlides")
  slides.next(5000);
  document.querySelector(".slides-arrowLeft").addEventListener("click", function(){
    slides.prev();
    slides.prev(5000);
  });
  document.querySelector(".slides-arrowRight").addEventListener("click", function(){
    slides.next();
    slides.next(5000);
  });
  // end CAROUSEL ===============================================================
};


// ================================================================ SmoothScroll
$(".smoothScroll").smoothScroll({
  easing: 'swing',
  speed: 900
});

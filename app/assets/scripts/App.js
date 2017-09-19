// BABEL & WEBPACK WILL TAKE CARE OF EVERYTHING, ES5 away.

import $ from 'jquery';
import Carousel from './modules/Carousel';
import BurgerToggle from './modules/toggleMenu';
import StickyNav from './modules/StickyNav';



var toggleMenu = new BurgerToggle();

// START CAROUSEL ==============================================================
var slides = new Carousel("siteSlides")
// slides.next(5000);
document.querySelector(".slides-arrowLeft").addEventListener("click", function(){
  // slides.prev();
  slides.prev(5000);
});
document.querySelector(".slides-arrowRight").addEventListener("click", function(){
  // slides.next();
  slides.next(5000);
});
// end CAROUSEL ================================================================

// BABEL & WEBPACK WILL TAKE CARE OF EVERYTHING, ES5 away.

import $ from 'jquery';
import Carousel from './modules/Carousel';



//
// import RevealOnScroll from './modules/RevealOnScroll';//
// new RevealOnScroll($(".SOME-CLASS-NAME"), "85%");
//

var slides = new Carousel("siteSlides")
slides.next(5500);
// document.querySelector(".slides-arrowLeft").addEventListener("click", function(){
//   slides.prev();
// });
//
//
// document.querySelector(".slides-arrowRight").addEventListener("click", function(){
//   slides.next();

// });

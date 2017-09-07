import $ from "jquery"

$(".menu_burger_close").click(function() {
  $(".menu_burger").removeClass("hideBurger");
  $(".side_menu").removeClass("side_menu_open");
});

$(".menu_burger").click(function(){
  $(this).addClass("hideBurger");
  $(".side_menu").toggleClass("side_menu_open");
})

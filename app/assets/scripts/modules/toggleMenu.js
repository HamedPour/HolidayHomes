import $ from "jquery"


class BurgerToggle {
  constructor(){
      $(".menu_burger_closeButton").click(function() {
      $(".menu_burger").removeClass("hideBurger");
      $(".side_menu").removeClass("side_menu_open");
    });

    $(".menu_burger_Button").click(function(){
      console.log("burgerBottonClicked");
      $(this).addClass("hideBurger");
      $(".side_menu").toggleClass("side_menu_open");
    })

  }
}

export default BurgerToggle;

import $ from "jquery"

// what the class/function does in a nutshell
class BurgerToggle {
  constructor(){
      $(".menu_burger_closeButton").click(function() {
      $(".menu_burger").removeClass("hideBurger");
      $(".side_menu").removeClass("side_menu_open");
    });

    $(".menu_burger_Button").click(function(){
      $(this).addClass("hideBurger");
      $(".side_menu").toggleClass("side_menu_open");
    })
    //remove the menu div once user has clicked on something
    document.querySelector(".side_menu--list").addEventListener("click", function(){
      $(".side_menu").removeClass("side_menu_open");
    });
  }
}

export default BurgerToggle;

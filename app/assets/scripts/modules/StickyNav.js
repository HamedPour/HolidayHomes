
const navWrapper = document.querySelector("#nav-wrapper");
const nav = document.querySelector(".nav");

function stickyNav() {
  const TopOfNav = navWrapper.offsetTop;
  if (window.scrollY >= TopOfNav) {
    //add class stickyNav
    navWrapper.style.minHeight = nav.clientHeight + "px";
    nav.classList.add("stickyNav");
  } else {
    // remove class stickyNav
    navWrapper.style.minHeight = 0;
    nav.classList.remove("stickyNav");
  }
};


window.addEventListener("scroll", stickyNav);

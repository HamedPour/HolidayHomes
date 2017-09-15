


const navWrapper = document.querySelector("#nav-wrapper");
const nav = document.querySelector(".nav");

function stickyNav() {
  const TopOfNav = nav.offsetTop;
  if (window.scrollY >= TopOfNav) {
    //add class stickyNav
    document.body.classList.add("stickyNav");
  } else {
    // remove class stickyNav
    document.body.classList.remove("stickyNav");
  }
};


window.addEventListener("scroll", stickyNav);

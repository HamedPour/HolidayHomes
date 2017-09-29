
class StickyNav {
  constructor(wrapperSelector, navSelector, stickyClass){
    this.wrapperElement = document.querySelector(wrapperSelector);
    this.navElement = document.querySelector(navSelector);
    this.stickyClass = stickyClass;

    const that = this;
    this.scrollHandler = function(){
      const TopOfNav = that.wrapperElement.offsetTop;
      if (window.scrollY >= TopOfNav) {
        //add class stickyNav
        that.wrapperElement.style.minHeight = that.navElement.clientHeight + "px";
        that.navElement.classList.add(that.stickyClass);
      } else {
        // remove class stickyNav
        that.wrapperElement.style.minHeight = 0;
        that.navElement.classList.remove(that.stickyClass);
      }
    }
  }

  attach() {
    addEventListener("scroll", this.scrollHandler);
  }

  detach() {
    removeEventListener("scroll", this.scrollHandler);
  }
}

export default StickyNav;

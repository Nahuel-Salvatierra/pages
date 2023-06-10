var navbar = document.getElementById("navbar");
var lastScrollTop = 0;

window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  
  lastScrollTop = scrollTop;
});

function load() {
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');

  var contentHeader = document.querySelector('.content .h-header');
  var hamburger = document.createElement("span");
  var sidebar = document.querySelector('.w-sidebar');
  sidebar.classList.add("sidebar-hidden");
  hamburger.html = '';
  hamburger.className = 'hamburger-menu';
  contentHeader.prepend(hamburger);

  hamburger.addEventListener("click", function () {
    var sidebar = document.querySelector('.w-sidebar');
    sidebar.classList.toggle("sidebar-hidden");
  }, true);

  var sidebarLinks = document.querySelectorAll('.w-sidebar a, .w-sidebar .cursor-pointer');
  sidebarLinks.forEach(function(sidebarLink) {
    sidebarLink.addEventListener("click", function() {
      var sidebar = document.querySelector('.w-sidebar');
      var h = document.querySelector('.hamburger-menu');
      var hStyles = getComputedStyle(h);
      if (hStyles.getPropertyValue('display') === "block") {
        sidebar.classList.add("sidebar-hidden");
      }
    }, false);
  });
}

document.addEventListener("DOMContentLoaded", load, false);

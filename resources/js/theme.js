function load() {
  // Set viewport
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');

  // Add hidden class to sidebar
  var sidebar = document.querySelector('.w-sidebar');
  sidebar.classList.add("sidebar-hidden");

  // Add hamburger menu to header
  var hamburger = document.createElement("span");
  hamburger.className = 'hamburger-menu';
  var contentHeader = document.querySelector('.content .h-header');
  contentHeader.prepend(hamburger);

  // Hamburger click event
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    var sidebar = document.querySelector('.w-sidebar');
    sidebar.classList.toggle("sidebar-hidden");
  }, true);

  // Sidebar links click event
  var sidebarLinks = document.querySelectorAll('.w-sidebar a, .w-sidebar .cursor-pointer');
  sidebarLinks.forEach(function(sidebarLink) {
    sidebarLink.addEventListener("click", function() {
      var sidebar = document.querySelector('.w-sidebar');
      sidebar.classList.add("sidebar-hidden");
    }, false);
  });

  // Hide sidebar when clicking outside
  var rootElements = document.querySelectorAll('body,html');
  rootElements.forEach(function(rootElement) {
    rootElement.addEventListener("click", function(e) {
      var sidebar = document.querySelector('.w-sidebar');
      if (e.target !== sidebar && !sidebar.contains(e.target)) {
        sidebar.classList.add("sidebar-hidden");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", load, false);

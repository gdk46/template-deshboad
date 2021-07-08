let sidebarListItem = document.querySelectorAll(".sidebar-list-item")

/**
 * Active item sidebar menu
 */
function activeSidebarListItem() {
  if(sidebarListItem){
      sidebarListItem.forEach(e => 
      e.classList.remove("item-active"))
      this.classList.add("item-active")
  }
}

sidebarListItem.forEach(l => l.addEventListener('click', activeSidebarListItem));


let menuToggle = document.querySelector(".header-toggle")
let sidebar = document.querySelector(".sidebar")

/**
 * Active sidebar menu
 */
function toggleSidebar() {
  menuToggle.classList.toggle("toggle-active");
  sidebar.classList.toggle("sidebar-active");
}

menuToggle.addEventListener('click', toggleSidebar)
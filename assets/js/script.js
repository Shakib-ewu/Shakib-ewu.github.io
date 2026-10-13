'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const target = this.innerText.trim().toLowerCase();

    for (let p = 0; p < pages.length; p++) {
      pages[p].classList.toggle("active", pages[p].dataset.page === target);
    }

    for (let n = 0; n < navigationLinks.length; n++) {
      navigationLinks[n].classList.toggle("active", navigationLinks[n] === this);
    }

    window.scrollTo(0, 0);

  });
}

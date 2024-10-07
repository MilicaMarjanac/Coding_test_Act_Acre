export default function navbar() {
  const menuIcon = document.querySelector(".menu-icon");
  const navMenu = document.querySelector(".nav-menu");

  menuIcon.addEventListener("click", expandMenu);

  /* EXPANDING MENU IF CLICKED ON MOBILE */
  function expandMenu() {
    let isMenuOpen;
    menuIcon.classList.toggle("active");
    navMenu.classList.toggle("active");
    isMenuOpen = !isMenuOpen;

    menuIcon.setAttribute(
      "aria-label",
      isMenuOpen ? "Close navigation" : "Open navigation"
    );
    menuIcon.setAttribute("aria-expanded", isMenuOpen);
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  /* CLOSING MENU */
  function closeMenu() {
    menuIcon.classList.remove("active");
    navMenu.classList.remove("active");
  }

  /* SCROLLING STICKY NAVBAR */
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      /* SCROLLING UP */
      navbar.classList.add("hidden");
      closeMenu();
    } else {
      /* SCROLLING DOWN */
      navbar.classList.remove("hidden");
    }
    /*  FOR MOBILE OR NEGATIVE SCROLLING */
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}

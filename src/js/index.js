import navbar from "./components/navbar.js";
import carousel from "./components/carousel.js";
import shop from "./pages/shop.js";

/* CALLING OTHER FUNCTIONS ON LOADING DOCUMENT */
document.addEventListener("DOMContentLoaded", function () {
  navbar();
  carousel();
  shop();
});

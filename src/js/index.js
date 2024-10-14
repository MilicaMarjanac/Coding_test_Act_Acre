import { navbar, carousel } from "./components/_index.js";
import { shop } from "./pages/_index.js";

/* CALLING OTHER FUNCTIONS ON LOADING DOCUMENT */
document.addEventListener("DOMContentLoaded", function () {
  navbar();
  carousel();
  shop();
});

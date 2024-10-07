export default function shop() {
  const minusButton = document.getElementById("decrement");
  minusButton.addEventListener("click", changeValueHandler);
  const plusButton = document.getElementById("increment");
  plusButton.addEventListener("click", changeValueHandler);

  /* UPDATING COUNTER VALUES WHEN CLICKED ON + OR - BUTTONS */
  function changeValueHandler(event) {
    const counter = event.target
      .closest(".counter-container")
      .querySelector(".count");

    const updateCounterValue =
      parseInt(counter.value) + (event.target.value === "+" ? 1 : -1);
    if (updateCounterValue >= 0) {
      counter.value = updateCounterValue;
    }
  }

  /* SETTING ACCORDION BEHAVIOUR AND APPLYING CLASSES*/
  const headers = document.querySelectorAll(".accordion-header");

  headers.forEach((header) => {
    header.addEventListener("click", function () {
      const body = this.nextElementSibling;

      headers.forEach((head) => {
        const otherBody = head.nextElementSibling;
        if (otherBody !== body) {
          otherBody.style.maxHeight = null;
          head.classList.remove("active");
        }
      });

      if (body.style.maxHeight) {
        body.style.maxHeight = null;
        header.classList.remove("active");
      } else {
        body.style.maxHeight = body.scrollHeight + "px";
        header.classList.add("active");
      }
    });
  });

  /* SETTING FIRST ACCORDION ELEMENT TO OPEN*/
  if (headers.length > 0) {
    headers[0].click();
  }

  /* ADDING PRODUCT TO CART ANIMATION*/
  document.querySelectorAll(".cart-button").forEach((button) =>
    button.addEventListener("click", (e) => {
      if (!button.classList.contains("loading")) {
        button.classList.add("loading");

        setTimeout(() => button.classList.remove("loading"), 3700);
      }
      e.preventDefault();
    })
  );
}

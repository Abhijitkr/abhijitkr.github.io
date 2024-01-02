document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(
    ".input-field input, .input-field textarea"
  );

  inputFields.forEach(function (field) {
    field.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("filled");
      } else {
        this.classList.remove("filled");
      }
    });
  });
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.onscroll = function () {
  var scrollButton = document.getElementById("scrollBtn");

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollButton.classList.add("show"); // Show the button
  } else {
    scrollButton.classList.remove("show"); // Hide the button
  }
};

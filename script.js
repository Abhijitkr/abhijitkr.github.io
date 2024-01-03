document.addEventListener("DOMContentLoaded", function () {
  // FADES OUT PRE-LOADER
  var loadingDiv = document.querySelector("div#loading");
  if (loadingDiv) {
    loadingDiv.style.transition = "opacity 1s"; // Changed the duration to 1 second
    loadingDiv.style.opacity = "0";
    setTimeout(function () {
      loadingDiv.style.display = "none";
    }, 1000); // Adjusted the timeout to match the duration
  }

  // SCROLL ANIMATION
  window.sr = ScrollReveal({ reset: false }); // reset false stops repetition of animation
  var commonCards =
    "#port-add-icon,#map-card,.interest-icon-even,.interest-icon," +
    ".timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card," +
    "#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img";

  // Customizing a reveal set
  sr.reveal(commonCards, { duration: 1100 });
  sr.reveal("#about-card,.map-label", { duration: 1400, delay: 500 });
  sr.reveal("#v-card-holder", { duration: 1400, distance: "150px" });
  sr.reveal(".skillbar-bar", { duration: 1800, delay: 300, distance: "0" });
});

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

function scrollToSection(id) {
  var section = document.getElementById(id);
  section.scrollIntoView({ behavior: "smooth" });
}

window.onscroll = function () {
  var scrollButton = document.getElementById("scrollBtn");

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    scrollButton.classList.add("show"); // Show the button
  } else {
    scrollButton.classList.remove("show"); // Hide the button
  }
};

window.onload = function () {
  document.getElementById("first_name").value = "";
  document.getElementById("sub").value = "";
  document.getElementById("email").value = "";
  document.getElementById("textarea1").value = "";
};

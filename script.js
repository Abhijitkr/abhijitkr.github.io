document.addEventListener("DOMContentLoaded", function () {
  var loadingDiv = document.querySelector("div#loading");
  if (loadingDiv) {
    loadingDiv.style.transition = "opacity 1s";
    loadingDiv.style.opacity = "0";
    setTimeout(function () {
      loadingDiv.style.display = "none";
    }, 1000);
  }

  window.sr = ScrollReveal({ reset: false });
  var commonCards =
    "#port-add-icon,#map-card,.interest-icon-even,.interest-icon," +
    ".timeline-dot,.timeline-content,#add-more,#skills-card,#testimonials-card," +
    "#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients,.section-title img";

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

function scrollToSection(sectionId) {
  const checkbox = document.getElementById("check");
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
  checkbox.checked = false;
  checkbox.dispatchEvent(new Event("change"));
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

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll(
  "#filterable-cards .portfolio-item"
);

const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");
  filterableCards.forEach((card) => {
    const dataNames = card.dataset.name;
    if (
      dataNames.includes(e.target.dataset.filter) ||
      e.target.dataset.filter === "all"
    ) {
      return card.classList.replace("hide", "show");
    }
    card.classList.add("hide");
  });
};

filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards)
);

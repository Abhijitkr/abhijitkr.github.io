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

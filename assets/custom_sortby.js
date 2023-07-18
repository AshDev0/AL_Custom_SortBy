for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
  dropdown.addEventListener("click", function () {
    this.querySelector(".custom-select").classList.toggle("open");
  });
}

//added this line to capure the original select dropdown --->
const select = document.querySelector(".product-page--cart-form select");

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener("click", function () {
    if (!this.classList.contains("selected")) {
      this.parentNode
        .querySelector(".custom-option.selected")
        .classList.remove("selected");
      this.classList.add("selected");
      this.closest(".custom-select").querySelector(
        ".custom-select__trigger span"
      ).textContent = this.textContent;
      console.log(this.value);
      select.value = this.value; //with this line when you modifie the value of your controller, you will modify the value of the original dropdown select!
    }
  });
}

window.addEventListener("click", function (e) {
  for (const select of document.querySelectorAll(".custom-select")) {
    if (!select.contains(e.target)) {
      select.classList.remove("open");
    }
  }
});

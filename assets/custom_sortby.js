/*

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

*/
/******* sort by js ***********/


 $("body").on("click", ".select-box", function () {
    $(".select-wrapper").toggle();
  });


$("body").on("click", ".custom-select li", function () {
    var selected = $(this).children().text();
    var selected_val = $(this).data("value");

    $(".sel-text").text(selected);
    customSort(selected_val);

});

function customSort(sortValue) {
 let currentUrl =  $(".select-box").data("collection-url") + "/?sort_by=" + sortValue;
 
  console.log(currentUrl)

$.ajax({
  url: currentUrl,
     success: function (data) {
     
      history.pushState(
        {
          page: currentUrl,
        },
        null,
        currentUrl
      );

    },
  
})
  
}

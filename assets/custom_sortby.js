

 $("body").on("click", ".select-box", function () {
    $(".select-wrapper").toggle();
  });


$("body").on("click", ".custom-select li", function () {
    var selected = $(this).children().text();
    var selected_val = $(this).data("value");

    $(".sel-text").text(selected);
    customSort(selected_val);

});
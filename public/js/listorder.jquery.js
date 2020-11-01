$(document).ready(function () {
  $("button").click(function (event) {
    event.preventDefault();

    console.log($(this).data("productid"));
    $.ajax({
      type: "get",
      url: "/index/order/delete/" + $(this).data("productid"),
      dataType: "text",
    }).done(function (data) {
      $(".listorder").html(data);
    });
  });
});

import $ from "./lib/lib";

// $(".active").setAtt("data", "fella");
// console.log($(".active").getAtt("data"));
// $(".active").delAtt("data");

$("button").on("click", function () {
  $("div").eq(2).toggleClass("active");
});

$("div").click(function () {
  console.log($(this).index());
});
// $("button").html("BOOM");

console.log($("div").eq(2).find(".more"));

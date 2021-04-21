import $ from "./lib/lib";

// $(".active").setAtt("data", "fella");
// console.log($(".active").getAtt("data"));
// $(".active").delAtt("data");
// $("button").html("BOOM");

// $("button").on("click", function () {
//   $("div").eq(1).toggleClass("active");
// });

// $("div").click(function () {
//   console.log($(this).index());
// });

// console.log($("div").eq(2).find(".some"));
// console.log($(".some").closest(".findme"));
// console.log($(".some").eq(1).siblings());
// console.log($(".findme").siblings());
// $("button").fadeIn(1800);

$("#first").on("click", () => {
  $("div").eq(1).fadeToggle(800);
});

$("[data-count='second']").on("click", () => {
  $("div").eq(2).fadeToggle(800);
});

$("button")
  .eq(2)
  .on("click", () => {
    $(".w-500").fadeToggle(800);
  });

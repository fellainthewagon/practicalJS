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

// $(".wrap").html(
//   `
//     <div class="dropdown">
//         <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">
//           Dropdown
//         </button>
//         <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
//           <a href="#" class="dropdown-item">Action #1</a
//           ><a href="#" class="dropdown-item">Action #2</a
//           ><a href="#" class="dropdown-item">Action #3</a>
//         </div>
//     </div>
//     `
// );
// $(".dropdown-toggle").dropdown();

$("#trigger").click(() =>
  $("#trigger").createModal({
    text: {
      title: "Modal title",
      body:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid excepturi inventore voluptates consequatur nulla quo eos consequuntur maiores.",
    },
    btns: {
      count: 3,
      settings: [
        ["Close", ["btn-danger", "mr-10"], true],
        [
          "Save changes",
          ["btn-success"],
          false,
          () => {
            alert("Yeah!");
          },
        ],
        [
          "Another btn",
          ["btn-warning", "ml-10"],
          false,
          () => {
            alert("Hi, fella!");
          },
        ],
      ],
    },
  })
);

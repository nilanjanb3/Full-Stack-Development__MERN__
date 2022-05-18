// document.querySelector("h1").style.color = "green";
// $("h1").css("color", "green");

// $("h1").addClass("big-title");

$("h1").addClass("big-title margin");

// $(document).ready(function () {
//     $("h1").addClass("big-title");
// });

// $(document).keydown(function (event) {
//     $("h1").text(event.key);
// });

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});


// $("h1").append("<button>new</button>");
// $("h1").prepend("<button>new</button>");

// $("h1").before("<button>new</button>");
// $("h1").after("<button>new</button>");

// $("button").remove();

// $("button").click(function (e) {
//     $("h1").hide();
//     $("h1").show();

//     $("h1").fadeIn();
//     $("h1").toggle();
//     $("h1").slideToggle();
//     $("h1").fadeToggle();

// });

$("button").click(function (e) {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 }); // animate() only takes params which has number values

});
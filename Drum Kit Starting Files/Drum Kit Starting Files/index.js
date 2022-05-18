var n = document.querySelectorAll("button").length;
var btn = document.querySelectorAll("button");
var btn_arr = Array.from(btn);
var btnName;
for (var i = 0; i < n; i++) {

    btn[i].addEventListener("click", function () {
        btnName = this.innerHTML;
        playMusic(btnName);
        buttonAnim(btnName);

    });
}



document.addEventListener("keydown", function (event) {
    playMusic(event.key);
    buttonAnim(event.key);
}
);

function playMusic(buttonName) {
    switch (buttonName) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            break;

    }
}
function buttonAnim(buttonName) {
    document.querySelector("." + buttonName).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + buttonName).classList.remove("pressed");
    }, 100);

    // document.querySelector("." + buttonName).classList.toggle("pressed");
}
// alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var audio;
var level = 1;
var index = 0;
var flag = true;

// Function to play audio
function playSound(btnColor) {
    switch (btnColor) {
        case "yellow":
            audio = new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "green":
            audio = new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "red":
            audio = new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "blue":
            audio = new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "wrong":
            audio = new Audio("sounds/wrong.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

// Function to add effect of pressed class
function addRemovePressedClass(btnColor) {
    $("#" + btnColor).addClass("pressed");
    setTimeout(() => {
        $("#" + btnColor).removeClass("pressed");
    }, 100);
}

function gameOver() {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 300);

    $("h1").text("Game Over, Press Any Key to Restart");

    gamePattern = [];
    userClickedPattern = [];
    level = 1;
    index = 0;
}


function nextSequence() {
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    addRemovePressedClass(randomChosenColour);

    // playGame();

}

function changeLevel() {
    $("h1").text("Level " + level);
    ++level;
    flag = true;
}





$(document).keydown(function (e) {
    if (gamePattern.length === 0) {

        changeLevel();
        setTimeout(() => {
            nextSequence();
        }, 500);

    }


});
$(".btn").click(function (e) {

    playSound(this.id);
    addRemovePressedClass(this.id);

    if (gamePattern.length === 0) {
        gameOver();
        flag = false;
    }
    else {
        if (gamePattern[index] === this.id) {
            index++;
        }
        else {
            gameOver();
            flag = false;
        }
    }
    if (index === gamePattern.length && flag === true) {

        index = 0;
        click = 0;
        changeLevel();
        $("button").attr("disabled", true);

        setTimeout(() => {
            $("button").attr("disabled", false);
        }, 500);

        setTimeout(() => {
            nextSequence();
        }, 600);


    }
    // else 



});


var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

var randomNumber = nextSecuence();
var randomChosenColor = buttonColours[randomNumber];

gamePattern.push(randomChosenColor);

var id = "#" + randomChosenColor;
$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
audio.play();

function nextSecuence() {
    return Math.floor(Math.random() * (3 + 1));
}
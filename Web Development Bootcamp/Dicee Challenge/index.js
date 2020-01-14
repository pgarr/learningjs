var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var first_dice_img = "images/dice" + randomNumber1 + ".png";
var first_dice = document.getElementsByClassName("img1")[0];
first_dice.setAttribute("src", first_dice_img);

var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
var second_dice_img = "images/dice" + randomNumber2 + ".png";
var second_dice = document.getElementsByClassName("img2")[0];
second_dice.setAttribute("src", second_dice_img);

var text;
if (randomNumber1 === randomNumber2) {
    text = "Draw!"
} else if (randomNumber1 > randomNumber2) {
    text = "🚩 Player 1 Wins!"
} else {
    text = "Player 2 Wins! 🚩"
}
document.querySelector("h1").innerHTML = text;

